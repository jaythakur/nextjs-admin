'use client';
import { Box, Button, Paper, Typography } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { yupResolver } from '@hookform/resolvers/yup';

import staticText from '@/utils/staticText.json';
import CUSTextField from '@/ui-components/FormControls/CUSTextField';
import { useForm } from 'react-hook-form';
import { loginFormSchema } from '@/utils/validationSchema';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { doLogin } from '@/redux/features/users/api';
import CUSPasswordField from '@/ui-components/FormControls/CUSPasswordField';

const LoginPage = () => {
  // Define static text
  const {
    pageDetails: { loginInfo },
    formMeta,
  } = staticText;

  // Define form control
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    mode: 'onBlur',
  });
  const dispatch = useAppDispatch();
  const userReducer = useAppSelector((state) => state.userReducer);

  const router = useRouter();

  // submit login form data after validation success
  const onSubmit = async (data) => {
    dispatch(doLogin({ formData: data, handleRoute: router.push }));
  };

  return (
    <>
      <Box
        display="flex"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Box width="600px">
          <Paper
            component={Box}
            display="flex"
            flexDirection="column"
            elevation={6}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box bgcolor="primary.main" padding={3}>
                <Box textAlign="center">
                  <ExitToAppIcon sx={{ color: '#fff', fontSize: 48 }} />
                </Box>
                <Typography
                  component="h1"
                  variant="h1"
                  color="#fff"
                  textAlign="center"
                >
                  {loginInfo.heading}
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column" padding={2}>
                <CUSTextField
                  name="username"
                  id="username"
                  lableText={formMeta.username.lableText}
                  control={control}
                  errorMessage={errors?.username?.message}
                />
                <CUSPasswordField
                  name="password"
                  id="password"
                  lableText={formMeta.password.lableText}
                  control={control}
                  errorMessage={errors?.password?.message}
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: '16px', height: '3rem' }}
                  type="submit"
                >
                  Log In
                </Button>
              </Box>
            </form>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default LoginPage;
