import { createAsyncThunk } from '@reduxjs/toolkit';
import { startLoading, stopLoading } from '../loader/loadingSlice';
import { API_ENDPOINTS } from '@/config/APIEndpoints';
import axiosInstance from '@/config/axios';

export const createRole = createAsyncThunk(
  'roles/post',
  async ({ name }, { dispatch, rejectWithValue }) => {
    dispatch(startLoading()); // Show loader before fetching data
    try {
      const response = await axiosInstance.post(API_ENDPOINTS.ROLES, {
        name: name,
      }); // Replace with your endpoint
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    } finally {
      dispatch(stopLoading()); // Hide loader after fetching data
    }
  }
);

export const getRoles = createAsyncThunk(
  'roles/get',
  async (_, { dispatch, rejectWithValue }) => {
    dispatch(startLoading()); // Show loader before fetching data
    try {
      const response = await axiosInstance.get(API_ENDPOINTS.ROLES); // Replace with your endpoint
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    } finally {
      dispatch(stopLoading()); // Hide loader after fetching data
    }
  }
);

export const updateRole = createAsyncThunk(
  'roles/update',
  async ({ roleId, name }, { dispatch, rejectWithValue }) => {
    dispatch(startLoading()); // Show loader before fetching data
    try {
      const response = await axiosInstance.put(
        API_ENDPOINTS.ROLES + '/' + roleId,
        {
          name: name,
        }
      ); // Replace with your endpoint
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    } finally {
      dispatch(stopLoading()); // Hide loader after fetching data
    }
  }
);

export const deleteRole = createAsyncThunk(
  'roles/delete',
  async ({ roleId }, { dispatch, rejectWithValue }) => {
    dispatch(startLoading()); // Show loader before fetching data
    try {
      await axiosInstance.delete(API_ENDPOINTS.ROLES + '/' + roleId); // Replace with your endpoint
      return roleId;
    } catch (error) {
      rejectWithValue(error.response.data);
    } finally {
      dispatch(stopLoading()); // Hide loader after fetching data
    }
  }
);
