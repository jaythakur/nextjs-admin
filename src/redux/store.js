import { configureStore } from '@reduxjs/toolkit';

import loadingReducer from '@/redux/features/loader/loadingSlice';
import userReducer from '@/redux/features/users/usersSlice';
import rolesReducer from '@/redux/features/roles/rolesSlice';
import notificationReducer from '@/redux/features/notification/notificationSlice';
import subjectReducer from '@/redux/features/subjects/subjectsSlice';
import commonReducer from '@/redux/features/common/commonSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      loadingReducer,
      userReducer,
      rolesReducer,
      notificationReducer,
      subjectReducer,
      commonReducer,
    },
    devTools: true,
  });
};
