import React from 'react';

//material ui
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

const RenderSelectField = ({
  input,
  label,
  children,
  meta: { touched, error },
  ...custom
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        {...input}
        error={touched && error ? true : false}
        fullWidth
        {...custom}
      >
        {children}
      </Select>
    </FormControl>
  );
};

export default RenderSelectField;
