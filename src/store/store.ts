import { userSlice } from './userSlice';
import { configureStore } from '@reduxjs/toolkit';
import { postEntriesSlice } from './postEntriesSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    postEntries: postEntriesSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
