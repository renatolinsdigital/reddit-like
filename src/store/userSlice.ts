import { User } from '../domain/models';
import { UserState } from './store.model';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const emptyUserState: UserState = {
  value: {} as User
};

export const userSlice = createSlice({
  name: 'user',
  initialState: emptyUserState,
  reducers: {
    setLoggedUser: (state: UserState, action: PayloadAction<User>) => {
      state.value = action.payload;
    },
    setEmptyUser: (state: UserState) => {
      state.value = {} as User;
    }
  }
});

export const { setLoggedUser, setEmptyUser } = userSlice.actions;
