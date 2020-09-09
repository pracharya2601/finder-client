import React from 'react';
import Typography from '@material-ui/core/Typography';

const Fullname = (props) => {
  const { fullName, handle } = props;
  return (
    <Typography variant="h5" color="primary">
      {fullName}
    </Typography>
  );
};

export default Fullname;
