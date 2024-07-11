import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import { amber } from '@mui/material/colors';

import staticText from '@/utils/staticText.json';

export default function DeleteConfirmation({ open, onClose, onConfirm }) {
  const {
    pageDetails: { deleteConfirmation },
    buttons,
  } = staticText;
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          <Typography
            variant="h3"
            component="h3"
            fontWeight="bold"
            display="flex"
            gap={1.5}
          >
            <WarningIcon sx={{ color: amber[500] }} />{' '}
            {deleteConfirmation.heading}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {deleteConfirmation.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onConfirm} variant="contained" color="primary">
            {buttons.delBtn}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
