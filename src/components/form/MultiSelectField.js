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
}) => {
  let newData = data;
  let val = [];
  const handleCreate = (name) => {
    newData.unshift(name);
  };

  return (
    <>
      {touched && error && (
        <div style={{ textAlign: 'center', color: 'red', marginTop: '10px' }}>
          Select some applicable
        </div>
      )}
      <Multiselect
        {...input}
        dropUp
        onBlur={() => input.onBlur()}
        value={input.value || []} // requires value to be an array
        data={newData}
        textField={name}
        onCreate={(name) => handleCreate(name)}
        placeholder={label}
      />
    </>
  );
};

export default MultiSelectField;
