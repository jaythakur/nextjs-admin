import { createAsyncThunk } from '@reduxjs/toolkit';
import { startLoading, stopLoading } from '../loader/loadingSlice';
import { API_ENDPOINTS } from '@/config/APIEndpoints';
import routes from '@/config/routes';
import axiosInstance from '@/config/axios';
import { setSuccessMsg } from '../notification/notificationSlice';

export const fetchUsers = createAsyncThunk(
  'users/get',
  async (_, { dispatch, rejectWithValue }) => {
    dispatch(startLoading()); // Show loader before fetching data
    try {
      const response = await axiosInstance.get(API_ENDPOINTS.GET_USERS);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    } finally {
      dispatch(stopLoading()); // Hide loader after fetching data
    }
  }
);

export const getUserDetail = createAsyncThunk(
  'users/getUserDetail',
  async (_, { dispatch, rejectWithValue }) => {
    dispatch(startLoading()); // Show loader before fetching data
    try {
      const response = await axiosInstance.get(API_ENDPOINTS.GET_USER_DETAIL);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    } finally {
      dispatch(stopLoading()); // Hide loader after fetching data
    }
  }
);

export const doLogin = createAsyncThunk(
  'users/login',
  async (formObj, { dispatch, rejectWithValue }) => {
    const { formData, handleRoute } = formObj;
    dispatch(startLoading()); // Show loader before fetching data
    try {
      const response = await axiosInstance.post(API_ENDPOINTS.LOGIN, formData);
      localStorage.setItem('accessToken', response.data.data.accessToken);
      localStorage.setItem('sessionId', response.data.data.sessionId);
      handleRoute(routes.HOME);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    } finally {
      dispatch(stopLoading()); // Hide loader after fetching data
    }
  }
);

export const updateProfile = createAsyncThunk(
  'users/updateProfile',
  async (formObj, { dispatch, rejectWithValue }) => {
    const { formData } = formObj;
    dispatch(startLoading()); // Show loader before fetching data
    try {
      const response = await axiosInstance.post(
        API_ENDPOINTS.UPDATE_PROFILE,
        formData
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    } finally {
      dispatch(stopLoading()); // Hide loader after fetching data
    }
  }
);

export const updatePassword = createAsyncThunk(
  'users/updatePassword',
  async (formObj, { dispatch, rejectWithValue }) => {
    const { formData } = formObj;
    dispatch(startLoading()); // Show loader before fetching data
    try {
      const response = await axiosInstance.post(
        API_ENDPOINTS.UPDATE_PASSWORD,
        formData
      );
      dispatch(setSuccessMsg(response.data?.message));
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    } finally {
      dispatch(stopLoading()); // Hide loader after fetching data
    }
  }
);

export const createUser = createAsyncThunk(
  'users/create',
  async (formObj, { dispatch, rejectWithValue }) => {
    const { formData, handleRoute } = formObj;
    dispatch(startLoading()); // Show loader before fetching data
    try {
      const response = await axiosInstance.post(
        API_ENDPOINTS.GET_USERS,
        formData
      );
      handleRoute(routes.USERS);
      dispatch(setSuccessMsg(response.data?.message));
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    } finally {
      dispatch(stopLoading()); // Hide loader after fetching data
    }
  }
);

export const deleteUser = createAsyncThunk(
  'users/delete',
  async ({ userId }, { dispatch, rejectWithValue }) => {
    dispatch(startLoading()); // Show loader before fetching data
    try {
      const response = await axiosInstance.delete(
        API_ENDPOINTS.GET_USERS + '/' + userId
      );
      dispatch(setSuccessMsg(response.data?.message));
      return response.data.data;
    } catch (error) {
      rejectWithValue(error.response.data);
    } finally {
      dispatch(stopLoading()); // Hide loader after fetching data
    }
  }
);
