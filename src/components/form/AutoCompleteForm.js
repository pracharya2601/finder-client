import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import RenderField from './RenderField';

const AutoCompleteForm = (props) => {
  const {
    name,
    input,
    label,
    rows,
    type,
    placeholder,
    outlined,
    options,
    fieldArray,
    helperText,
    loading,
    multiline,
    meta: { touched, error },
  } = props;
  const { onFocus, onBlur, ...myInput } = input;
  return (
    <Autocomplete
      id="autocomplete"
      freeSolo
      options={options.map((option) => option)}
      {...input}
      renderInput={(params) => (
        <TextField
          {...input}
          {...params}
          name={name}
          type={type}
          variant={outlined}
          label={label}
          placeholder={placeholder}
        />
      )}
    />
  );
};

export default AutoCompleteForm;
