import React from 'react';
import { Accordion } from '@material-ui/core';

import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const AccoudinMenu = ({ children, heading }) => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{heading}</Typography>
        </AccordionSummary>
        <>{children}</>
      </Accordion>
    </div>
  );
};

export default AccoudinMenu;
