import React from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

export default ({ childern, onClick, tip, btnClassName, tipClassName }) => (
  <Tooltip title={tip} className={tipClassName}>
    <IconButton onClick={onClick} className={btnClassName}>
      {childern}
    </IconButton>
  </Tooltip>
);
