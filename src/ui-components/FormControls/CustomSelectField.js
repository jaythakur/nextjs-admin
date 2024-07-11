import {
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  TextField,
} from '@mui/material';
import { Controller } from 'react-hook-form';

const CustomSelectField = ({
  name,
  lableText,
  helperText,
  id,
  errorMessage,
  fullWidth = true,
  control,
  selectBoxProps,
  formControllProps,
  formLabelProps,
  hookFormProps,
  beforeValueChange,
  afterValueChange,
  data,
  placeholder,
}) => {
  return (
    <Controller
      defaultValue=""
      name={name}
      control={control}
      {...hookFormProps}
      render={({ field }) => (
        <>
          <FormControl
            fullWidth={fullWidth}
            error={!!errorMessage}
            margin="normal"
            {...formControllProps}
          >
            <FormLabel htmlFor={id} {...formLabelProps}>
              {lableText}
            </FormLabel>
            <TextField
              size="small"
              select
              {...field}
              onChange={(event) => {
                if (beforeValueChange) beforeValueChange(event.target.value);
                field.onChange(event.target.value);
                if (afterValueChange) afterValueChange(event.target.value);
              }}
              label=""
              error={!!errorMessage}
              {...selectBoxProps}
            >
              <MenuItem value="">
                {placeholder || lableText || 'Choose option'}
              </MenuItem>
              {data.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.labelText}
                </MenuItem>
              ))}
            </TextField>
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

export default CustomSelectField;
