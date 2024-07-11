import { updateProfile } from '@/redux/features/users/api';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import CUSTextField from '@/ui-components/FormControls/CUSTextField';
import staticText from '@/utils/staticText.json';
import { updateProfileSchema } from '@/utils/validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Divider } from '@mui/material';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const ProfileForm = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(updateProfileSchema),
  });
  const { formMeta, buttons } = staticText;
  const { currentUser } = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    reset({
      firstName: currentUser?.firstName,
      middleName: currentUser?.middleName,
      lastName: currentUser?.lastName,
    });
  }, [currentUser]);

  const onSubmit = (data) => {
    dispatch(updateProfile({ formData: data }));
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CUSTextField
          name="firstName"
          id="firstName"
          control={control}
          lableText={formMeta.firstName.lableText}
          helperText={formMeta.firstName?.helperText}
          errorMessage={errors?.firstName?.message}
          textFieldProps={{
            inputProps: { maxLength: formMeta.firstName.maxlength },
          }}
        />
        <CUSTextField
          name="middleName"
          id="middleName"
          control={control}
          lableText={formMeta.middleName.lableText}
          helperText={formMeta.middleName?.helperText}
          errorMessage={errors?.middleName?.message}
          textFieldProps={{
            inputProps: { maxLength: formMeta.middleName.maxlength },
          }}
        />
        <CUSTextField
          name="lastName"
          id="lastName"
          control={control}
          lableText={formMeta.lastName.lableText}
          helperText={formMeta.lastName?.helperText}
          errorMessage={errors?.lastName?.message}
        />
        <Divider sx={{ my: '1rem' }} />
        <Box
          display="flex"
          borderTop="1px solid grey.200"
          justifyContent="space-between"
        >
          <Button
            variant="text"
            type="button"
            onClick={() =>
              reset({
                firstName: currentUser?.firstName,
                middleName: currentUser?.middleName,
                lastName: currentUser?.lastName,
              })
            }
          >
            {buttons.resetBtn}
          </Button>
          <Button variant="contained" size="medium" type="submit">
            {buttons.updateBtn}
          </Button>
        </Box>
      </form>
    </>
  );
};

export default ProfileForm;
