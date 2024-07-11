import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';

import staticText from '@/utils/staticText.json';
import { useForm } from 'react-hook-form';
import CUSTextField from '@/ui-components/FormControls/CUSTextField';
import CustomSelectField from '@/ui-components/FormControls/CustomSelectField';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { addSubjectFormSchema } from '@/utils/validationSchema';
import { createSubject, updateSubject } from '@/redux/features/subjects/api';

export default function AddSubjectModal({ open, onClose, subjectInfo }) {
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(addSubjectFormSchema),
  });
  const { statusList } = useAppSelector((state) => state.commonReducer);
  const {
    pageDetails: { manageSubjects },
    formMeta,
    buttons,
  } = staticText;
  const dispatch = useAppDispatch();
  const edit = Object.keys(subjectInfo).length > 0;

  const onSubmit = (data) => {
    console.log(edit, data);
    if (edit) {
      dispatch(
        updateSubject({ formData: data, subjectId: subjectInfo.subjectId })
      );
    } else {
      dispatch(createSubject({ formData: data }));
    }
    onClose();
  };

  React.useEffect(() => {
    if (Object.keys(subjectInfo).length > 0) {
      reset({
        subjectName: subjectInfo.subjectName,
        status: subjectInfo.status,
      });
    }
  }, [subjectInfo]);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="sm"
        fullWidth
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit(onSubmit),
        }}
      >
        <DialogTitle id="alert-dialog-title" fontWeight="bold" variant="h3">
          {edit
            ? manageSubjects.updateSubjectModalHeading
            : manageSubjects.addSubjectModalHeading}
        </DialogTitle>
        <DialogContent>
          <CUSTextField
            name="subjectName"
            id="subjectName"
            control={control}
            lableText={formMeta.subjectName.lableText}
            helperText={formMeta.subjectName?.helperText}
            errorMessage={errors?.subjectName?.message}
            textFieldProps={{
              inputProps: { maxLength: formMeta.subjectName.maxlength },
            }}
          />
          <CustomSelectField
            name="status"
            id="status"
            lableText={formMeta.status.lableText}
            data={statusList}
            control={control}
            errorMessage={errors?.status?.message}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>{buttons.cancelBtn}</Button>
          <Button variant="contained" color="primary" type="submit">
            {buttons.saveBtn}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
