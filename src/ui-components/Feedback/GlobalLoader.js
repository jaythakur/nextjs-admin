'use client';
import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useAppSelector } from '@/redux/hooks';

const GlobalLoader = () => {
  const isLoading = useAppSelector((state) => state.loadingReducer.isLoading);

  return (
    <Backdrop
      sx={{
        color: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        // color: (theme) => theme.palette.grey[500],
        // zIndex: (theme) => theme.zIndex.drawer + 1,
        // backgroundColor: (theme) => theme.palette.grey[50],
      }}
      open={isLoading}
    >
      <CircularProgress color="inherit" size={100} />
    </Backdrop>
  );
};

export default GlobalLoader;
