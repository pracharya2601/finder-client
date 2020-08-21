import React from 'react';
import TextField from '@material-ui/core/TextField';

const RenderField = (props) => {
  const {
    input,
    label,
    rows,
    type,
    placeholder,
    outlined,
    fieldArray,
    meta: { touched, error },
  } = props;
  return (
    <TextField
      {...input}
      type={type}
      label={label}
      placeholder={placeholder}
      rows={rows}
      fullWidth
      variant={outlined}
      error={touched && error ? true : false}
    />
  );
};

export default RenderField;
