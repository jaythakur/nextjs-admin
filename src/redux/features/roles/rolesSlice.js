import { createSlice } from '@reduxjs/toolkit';
import { extraReducersCallback } from './extraReducers';

const initialState = {
  roles: [],
  status: 'idle',
  error: null,
  loading: false,
};

export const rolesSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {},
  extraReducers: extraReducersCallback,
});

export const { userAdded } = rolesSlice.actions;

export default rolesSlice.reducer;
