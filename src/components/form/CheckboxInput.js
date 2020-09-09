import React from 'react';

//material ui
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxInput = ({ input, label }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          color="primary"
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  );
};

export default CheckboxInput;
