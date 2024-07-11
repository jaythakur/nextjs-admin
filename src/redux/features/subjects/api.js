import { createAsyncThunk } from '@reduxjs/toolkit';
import { startLoading, stopLoading } from '../loader/loadingSlice';
import { API_ENDPOINTS } from '@/config/APIEndpoints';
import routes from '@/config/routes';
import axiosInstance from '@/config/axios';
import { setSuccessMsg } from '../notification/notificationSlice';
import { filterError } from '@/utils/utils';

export const fetchSubjects = createAsyncThunk(
  'subjects/get',
  async (_, { dispatch, rejectWithValue }) => {
    dispatch(startLoading()); // Show loader before fetching data
    try {
      const response = await axiosInstance.get(API_ENDPOINTS.GET_SUBJECTS);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    } finally {
      dispatch(stopLoading()); // Hide loader after fetching data
    }
  }
);

export const updateSubject = createAsyncThunk(
  'subjects/update',
  async (formObj, { dispatch, rejectWithValue }) => {
    dispatch(startLoading()); // Show loader before fetching data
    try {
      const response = await axiosInstance.put(
        API_ENDPOINTS.GET_SUBJECTS + '/' + formObj.subjectId,
        formObj.formData
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(filterError(error));
    } finally {
      dispatch(stopLoading()); // Hide loader after fetching data
    }
  }
);

export const createSubject = createAsyncThunk(
  'subjects/create',
  async (formObj, { dispatch, rejectWithValue }) => {
    const { formData } = formObj;
    dispatch(startLoading()); // Show loader before fetching data
    try {
      const response = await axiosInstance.post(
        API_ENDPOINTS.GET_SUBJECTS,
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

export const deleteSubject = createAsyncThunk(
  'subjects/delete',
  async (formObj, { dispatch, rejectWithValue }) => {
    dispatch(startLoading()); // Show loader before fetching data
    try {
      const response = await axiosInstance.delete(
        API_ENDPOINTS.GET_SUBJECTS + '/' + formObj.subjectId
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
