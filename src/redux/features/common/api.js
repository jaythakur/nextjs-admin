import { createAsyncThunk } from '@reduxjs/toolkit';
import { startLoading, stopLoading } from '../loader/loadingSlice';
import { API_ENDPOINTS } from '@/config/APIEndpoints';
import axiosInstance from '@/config/axios';

export const fetchStatusList = createAsyncThunk(
  'common/get',
  async (_, { dispatch, rejectWithValue }) => {
    dispatch(startLoading()); // Show loader before fetching data
    try {
      const response = await axiosInstance.get(API_ENDPOINTS.GET_STATUS);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    } finally {
      dispatch(stopLoading()); // Hide loader after fetching data
    }
  }
);
