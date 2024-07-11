import { createSlice, current } from '@reduxjs/toolkit';
import { extraReducersCallback } from './extraReducers';

const initialState = {
  statusList: [],
  status: 'idle',
  error: {},
  loading: false,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {},
  extraReducers: extraReducersCallback,
});

export const { userAdded } = commonSlice.actions;

export default commonSlice.reducer;
