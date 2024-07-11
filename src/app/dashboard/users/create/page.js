'use client';
import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Link from 'next/link';
import routes from '@/config/routes';
import { useForm } from 'react-hook-form';
import CUSTextField from '@/ui-components/FormControls/CUSTextField';

import staticText from '@/utils/staticText.json';
import { yupResolver } from '@hookform/resolvers/yup';
import { createUserFormSchem } from '@/utils/validationSchema';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import ErrorBanner from '@/ui-components/Alerts/ErrorBanner';
import CustomSelectField from '@/ui-components/FormControls/CustomSelectField';
import { useEffect } from 'react';
import { getRoles } from '@/redux/features/roles/api';
import { createUser } from '@/redux/features/users/api';
import { useRouter } from 'next/navigation';
import CUSPasswordField from '@/ui-components/FormControls/CUSPasswordField';

const CreateUser = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(createUserFormSchem),
  });
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.userReducer);
  const { roles } = useAppSelector((state) => state.rolesReducer);
  const { formMeta, buttons } = staticText;
  const router = useRouter();

  useEffect(() => {
    if (roles.length === 0) {
      dispatch(getRoles());
    }
  }, [roles]);

  const onSubmit = (data) => {
    dispatch(createUser({ formData: data, handleRoute: router.push }));
  };

  const roleOptions =
    roles && roles.map((ele) => ({ name: ele.name, value: ele.roleId }));
  return (
    <>
      <Box
        mb={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h2" component="h3">
          Create user
        </Typography>
        <Button
          variant="text"
          startIcon={<KeyboardBackspaceIcon />}
          component={Link}
          href={routes.USERS}
          sx={{ mb: 2 }}
        >
          Back to Users
        </Button>
      </Box>
      {error?.errors && Object.keys(error.errors).length > 0 && (
        <ErrorBanner errors={error?.errors} />
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card variant="outlined" sx={{ maxWidth: '50%' }}>
          <CardContent>
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
            <CUSTextField
              name="username"
              id="username"
              control={control}
              lableText={formMeta.email.lableText}
              helperText={formMeta.email?.helperText}
              errorMessage={errors?.username?.message}
            />
            <CUSPasswordField
              name="password"
              id="password"
              control={control}
              lableText={formMeta.password.lableText}
              helperText={formMeta.password?.helperText}
              errorMessage={errors?.password?.message}
            />
            <CUSPasswordField
              name="cPassword"
              id="cPassword"
              control={control}
              lableText={formMeta.cPassword.lableText}
              helperText={formMeta.cPassword?.helperText}
              errorMessage={errors?.cPassword?.message}
              type="password"
            />
            <CustomSelectField
              name="roleId"
              id="roleId"
              lableText={formMeta.dropdownRole.lableText}
              data={roleOptions}
              control={control}
              errorMessage={errors?.roleId?.message}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large"
              sx={{ mt: '10px' }}
            >
              {buttons.submitBtn}
            </Button>
          </CardContent>
        </Card>
      </form>
    </>
  );
};

export default CreateUser;
