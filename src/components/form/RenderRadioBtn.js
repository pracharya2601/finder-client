import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Tooltip from '@material-ui/core/Tooltip';

const RenderRadioBtn = ({ type, input, radioValue, ...rest }) => {
  const radio = radioValue.map((radio) => {
    return (
      <Tooltip title={radio.subtitle} placement="top" key={radio.value}>
        <FormControlLabel
          value={radio.value}
          control={<Radio color="primary" />}
          label={radio.name}
        />
      </Tooltip>
    );
  });
  return (
    <FormControl>
      <FormLabel component="legend">{type}</FormLabel>
      <RadioGroup
        {...input}
        {...rest}
        style={{ display: 'flex', flexDirection: 'row' }}
      >
        {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
        {radio}
      </RadioGroup>
    </FormControl>
  );
};

export default RenderRadioBtn;
