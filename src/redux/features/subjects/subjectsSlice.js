import { createSlice } from '@reduxjs/toolkit';
import { extraReducersCallback } from './extraReducers';

const initialState = {
  subjects: [],
  status: 'idle',
  error: {},
  loading: false,
};

export const subjectsSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: extraReducersCallback,
});

export const { userAdded } = subjectsSlice.actions;

export default subjectsSlice.reducer;
