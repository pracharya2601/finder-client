import React from 'react';

//react widget
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Multiselect from 'react-widgets/lib/Multiselect';
import 'react-widgets/dist/css/react-widgets.css';

const MultiSelectField = ({
  input,
  data,
  label,
  name,
  meta: { touched, error },
}) => (
  <>
    {touched && error && (
      <div style={{ textAlign: 'center', color: 'red', marginTop: '10px' }}>
        Select some applicable
      </div>
    )}
    <Multiselect
      {...input}
      onBlur={() => input.onBlur()}
      value={input.value || []} // requires value to be an array
      data={data}
      textField={name}
      placeholder={label}
    />
  </>
);

export default MultiSelectField;
