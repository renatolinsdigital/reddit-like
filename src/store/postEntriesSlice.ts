import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import fetchPosts from 'src/domain/data/posts.json'; // Assuming 'posts.json' is a valid JSON file
import { PostEntriesState } from './store.model';
import { PostEntryInfo } from 'src/domain/models';

export const fetchPostEntries = createAsyncThunk(
  'postEntries/fetchPostEntries',
  async () => {
    const posts = (await fetchPosts) as PostEntryInfo[];
    return posts;
  }
);

const initialState: PostEntriesState = {
  hasError: false,
  isLoading: false,
  value: [] as PostEntryInfo[],
  filteredValue: [] as PostEntryInfo[]
};

export const postEntriesSlice = createSlice({
  name: 'postEntries',
  initialState,
  reducers: {
    setPostEntries: (
      state: PostEntriesState,
      { payload }: PayloadAction<PostEntryInfo[]>
    ) => {
      state.value = payload;
      state.filteredValue = payload;
    },
    filterByText: (state: PostEntriesState, action: PayloadAction<string>) => {
      const searchQuery = action.payload.toUpperCase();
      if (searchQuery === 'ALL') {
        state.filteredValue = [...state.value];
        return;
      }
      const filteredPostEntries = state.value.filter(post => {
        const { category } = post;
        const { title, author, url } = post.meta;
        return `${category} ${author} ${title} ${url}`
          .toUpperCase()
          .includes(searchQuery);
      });
      state.filteredValue = filteredPostEntries;
    },
    orderByUpvotes: (state: PostEntriesState) => {
      state.filteredValue = state.filteredValue.sort(
        (a, b) => b.upvotes - a.upvotes
      );
    },
    orderByComments: (state: PostEntriesState) => {
      state.filteredValue = state.filteredValue.sort(
        (a, b) => b.comments - a.comments
      );
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPostEntries.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchPostEntries.fulfilled, (state, action) => {
        state.value = action.payload;
        state.filteredValue = action.payload;
        state.hasError = false;
        state.isLoading = false;
      })
      .addCase(fetchPostEntries.rejected, state => {
        state.hasError = true;
        state.isLoading = false;
      });
  }
});

export const { setPostEntries, filterByText, orderByUpvotes, orderByComments } =
  postEntriesSlice.actions;

export default postEntriesSlice.reducer;
