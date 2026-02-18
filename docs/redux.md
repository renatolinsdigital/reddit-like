# Redux

This document describes how [Redux Toolkit](https://redux-toolkit.js.org/) is used in this project.

---

## 1 - Setup: Provider

The Redux store is passed to the app via `<Provider>` in `App.tsx`, wrapping the entire component tree:

```tsx
// src/App.tsx
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>...</ThemeProvider>
    </Provider>
  );
}
```

---

## 2 - Store configuration

The store is configured in `src/store/store.ts` using `configureStore` from Redux Toolkit:

```ts
// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';
import { postEntriesSlice } from './postEntriesSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    postEntries: postEntriesSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false })
});
```

The `serializableCheck` middleware is disabled to allow non-serializable values in the state if needed.

---

## 3 - State shape and types

State interfaces and derived store types live in `src/store/store.model.ts`:

```ts
// src/store/store.model.ts
export interface UserState {
  value: User;
}

export interface PostEntriesState {
  hasError: boolean;
  isLoading: boolean;
  value: PostEntryInfo[];
  filteredValue: PostEntryInfo[];
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

`RootState` and `AppDispatch` are the two types used in every component that touches the store.

---

## 4 - Slices

Each feature area has its own slice file under `src/store/`. Slices group the initial state, reducers, and actions together.

### userSlice

`src/store/userSlice.ts` manages the currently logged-in user:

```ts
export const userSlice = createSlice({
  name: 'user',
  initialState: { value: {} as User },
  reducers: {
    setLoggedUser: (state, action: PayloadAction<User>) => {
      state.value = action.payload;
    },
    setEmptyUser: state => {
      state.value = {} as User;
    }
  }
});

export const { setLoggedUser, setEmptyUser } = userSlice.actions;
```

### postEntriesSlice

`src/store/postEntriesSlice.ts` manages the list of posts. It contains both standard reducers and an async thunk:

```ts
// Async thunk to fetch posts
export const fetchPostEntries = createAsyncThunk(
  'postEntries/fetchPostEntries',
  async () => {
    const posts = (await fetchPosts) as PostEntryInfo[];
    return posts;
  }
);

export const postEntriesSlice = createSlice({
  name: 'postEntries',
  initialState,
  reducers: {
    setPostEntries:  (state, { payload }: PayloadAction<PostEntryInfo[]>) => { ... },
    filterByText:    (state, action: PayloadAction<string>) => { ... },
    orderByUpvotes:  (state) => { ... },
    orderByComments: (state) => { ... },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPostEntries.pending,   state => { state.isLoading = true; })
      .addCase(fetchPostEntries.fulfilled, (state, action) => {
        state.value = action.payload;
        state.filteredValue = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(fetchPostEntries.rejected,  state => {
        state.hasError = true;
        state.isLoading = false;
      });
  },
});

export const { setPostEntries, filterByText, orderByUpvotes, orderByComments } =
  postEntriesSlice.actions;
```

---

## 5 - Public store API

Everything is re-exported from `src/store/index.ts` so components import from a single path:

```ts
// src/store/index.ts
export * from './store';
export * from './userSlice';
export * from './store.model';
export * from './postEntriesSlice';
```

Components import actions, thunks, and types like this:

```ts
import {
  AppDispatch,
  RootState,
  fetchPostEntries,
  filterByText,
  orderByUpvotes
} from 'src/store';
```

---

## 6 - Using the store in components

### Reading state with `useSelector`

```tsx
// src/domain/components/AppBody/AppBody.tsx
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

const {
  hasError,
  isLoading,
  filteredValue: postEntries
} = useSelector((state: RootState) => state.postEntries);
```

Always type the `state` parameter as `RootState` for full type inference on selected values.

### Dispatching actions with `useDispatch`

```tsx
// src/domain/components/AppBody/AppBody.tsx
import { useDispatch } from 'react-redux';
import {
  AppDispatch,
  fetchPostEntries,
  orderByUpvotes,
  setLoggedUser
} from 'src/store';

const dispatch = useDispatch<AppDispatch>();

// Dispatch a plain action
dispatch(setLoggedUser(fakeUser));

// Dispatch an async thunk
dispatch(fetchPostEntries());

// Dispatch an action from an event handler
const onOrderByUpvotes = () => dispatch(orderByUpvotes());
```

Always type `useDispatch` with `AppDispatch` so TypeScript accepts async thunks without errors.

---

## 7 - Summary: store slices at a glance

| Slice              | State key           | State fields                                      | Actions                                                                                           |
| ------------------ | ------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `userSlice`        | `state.user`        | `value: User`                                     | `setLoggedUser`, `setEmptyUser`                                                                   |
| `postEntriesSlice` | `state.postEntries` | `value`, `filteredValue`, `isLoading`, `hasError` | `setPostEntries`, `filterByText`, `orderByUpvotes`, `orderByComments`, `fetchPostEntries` (thunk) |
