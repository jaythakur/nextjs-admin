import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  successMessage: '',
  errorMessages: {},
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setSuccessMsg: (state, action) => {
      state.successMessage = action.payload;
    },
    clearSuccessMsg: (state) => {
      state.successMessage = '';
    },
  },
});

export const { setSuccessMsg, clearSuccessMsg } = notificationSlice.actions;

export default notificationSlice.reducer;
