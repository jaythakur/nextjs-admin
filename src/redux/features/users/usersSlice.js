import { createSlice, current } from '@reduxjs/toolkit';
import { extraReducersCallback } from './extraReducers';

const initialState = {
  users: [],
  accessToken: '',
  sessionId: '',
  status: 'idle',
  error: {},
  loading: false,
  currentUser: {},
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded: (state, action) => {
      state.users.push(action.payload);
    },
  },
  extraReducers: extraReducersCallback,
});

export const { userAdded } = usersSlice.actions;

export default usersSlice.reducer;
