import { updatePassword } from '@/redux/features/users/api';
import { useAppDispatch } from '@/redux/hooks';
import CUSPasswordField from '@/ui-components/FormControls/CUSPasswordField';
import staticText from '@/utils/staticText.json';
import { updatePasswordSchema } from '@/utils/validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Divider } from '@mui/material';
import { useForm } from 'react-hook-form';

const ChangePassword = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(updatePasswordSchema),
  });
  const { formMeta, buttons } = staticText;
  const dispatch = useAppDispatch();

  const onSubmit = (data) => {
    dispatch(
      updatePassword({
        formData: data,
      })
    );
    reset({ currentPassword: '', password: '', confirmPassword: '' });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CUSPasswordField
          name="currentPassword"
          id="currentPassword"
          control={control}
          lableText={formMeta.currentPassword.lableText}
          helperText={formMeta.currentPassword?.helperText}
          errorMessage={errors?.currentPassword?.message}
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
          name="confirmPassword"
          id="confirmPassword"
          control={control}
          lableText={formMeta.cPassword.lableText}
          helperText={formMeta.cPassword?.helperText}
          errorMessage={errors?.cPassword?.message}
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
              reset({ currentPassword: '', password: '', confirmPassword: '' })
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

export default ChangePassword;
