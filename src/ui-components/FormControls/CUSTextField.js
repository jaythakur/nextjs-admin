'use client';
import {
  FormControl,
  FormHelperText,
  FormLabel,
  TextField,
} from '@mui/material';
import { Controller } from 'react-hook-form';

const CUSTextField = ({
  name,
  lableText,
  helperText,
  id,
  errorMessage,
  fullWidth = true,
  type = 'text',
  control,
  textFieldProps,
  formControllProps,
  formLabelProps,
  hookFormProps,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      {...hookFormProps}
      render={({ field }) => (
        <>
          <FormControl
            margin="normal"
            fullWidth={fullWidth}
            error={!!errorMessage}
            {...formControllProps}
          >
            <FormLabel htmlFor={id} {...formLabelProps}>
              {lableText}
            </FormLabel>
            <TextField
              type={type}
              label=""
              name={name}
              variant="outlined"
              id={id}
              error={!!errorMessage}
              size="small"
              autoComplete="off"
              {...field}
              {...textFieldProps}
            />
            {errorMessage && (
              <FormHelperText error>{errorMessage}</FormHelperText>
            )}
            {helperText && (
              <FormHelperText error={false}>{helperText}</FormHelperText>
            )}
          </FormControl>
        </>
      )}
    />
  );
};

export default CUSTextField;
