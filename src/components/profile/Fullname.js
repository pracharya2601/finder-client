import React from 'react';
import { Link } from 'react-router-dom';
import MuiLink from '@material-ui/core/Link';

const Fullname = (props) => {
  const { fullName, handle } = props;
  return (
    <MuiLink
      variant="h5"
      color="primary"
      component={Link}
      to={`/user/profile/${handle}`}
    >
      {fullName}
    </MuiLink>
  );
};

export default Fullname;
