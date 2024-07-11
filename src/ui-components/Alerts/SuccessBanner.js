'use client';
import * as React from 'react';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { clearSuccessMsg } from '@/redux/features/notification/notificationSlice';

export default function SuccessBanner() {
  const { successMessage } = useAppSelector(
    (state) => state.notificationReducer
  );
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    setTimeout(() => {
      if (successMessage) {
        dispatch(clearSuccessMsg());
      }
    }, 2000);
  }, [successMessage]);

  return (
    <Collapse in={successMessage !== ''}>
      <Alert
        severity="success"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              dispatch(clearSuccessMsg());
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        sx={{
          mb: 2,
          borderRadius: '8px',
          borderTop: '5px solid',
          borderColor: 'success.main',
          bgcolor: 'common.white',
        }}
      >
        {successMessage}
      </Alert>
    </Collapse>
  );
}
