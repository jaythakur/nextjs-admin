'use client';
import {
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { Controller } from 'react-hook-form';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

const CUSPasswordField = ({
  name,
  lableText,
  helperText,
  id,
  errorMessage,
  fullWidth = true,
  control,
  textFieldProps,
  formControllProps,
  formLabelProps,
  hookFormProps,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
              type={showPassword ? 'text' : 'password'}
              label=""
              name={name}
              variant="outlined"
              id={id}
              error={!!errorMessage}
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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

export default CUSPasswordField;
