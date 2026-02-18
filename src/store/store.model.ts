import { store } from './store';
import { PostEntryInfo, User } from 'src/domain/models';

// State

export interface UserState {
  value: User;
}

export interface PostEntriesState {
  hasError: boolean;
  isLoading: boolean;
  value: PostEntryInfo[];
  filteredValue: PostEntryInfo[];
}

// Store utils

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
