'use client';
import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const DashboardLoader = () => {
  return (
    <Backdrop
      sx={{
        color: (theme) => theme.palette.grey[500],
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: (theme) => theme.palette.grey[50],
      }}
      open={true}
    >
      <CircularProgress color="inherit" size={100} />
    </Backdrop>
  );
};

export default DashboardLoader;
