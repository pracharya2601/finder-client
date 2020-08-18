import React from 'react';
import { Link } from 'react-router-dom';
//material ui
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const CarouselHeader = ({ heading, goTo, goToText }) => {
  return (
    <div style={style}>
      <Typography variant="h6" gutterBottom>
        {heading}
      </Typography>
      <Button size="small" component={Link} to={goTo}>
        {goToText}
      </Button>
    </div>
  );
};

const style = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '20px',
};

export default CarouselHeader;
