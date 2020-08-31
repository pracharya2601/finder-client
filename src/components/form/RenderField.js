import React from 'react';
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';

const RenderField = (props) => {
  const {
    input,
    label,
    rows,
    type,
    placeholder,
    outlined,
    fieldArray,
    helperText,
    loading,
    multiline,
    meta: { touched, error },
  } = props;
  return (
    <>
      <TextField
        {...input}
        type={type}
        label={label}
        placeholder={placeholder}
        rows={rows}
        helperText={helperText}
        fullWidth
        multiline={multiline ? true : false}
        rows={multiline ? rows : null}
        variant={outlined}
        error={(touched && error) || helperText ? true : false}
      />
      {loading && <LinearProgress />}
    </>
  );
};

export default RenderField;
