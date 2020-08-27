import React from 'react';
import { Link } from 'react-router-dom';
//material ui
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Header = ({ heading, goTo, goToText }) => {
  return (
    <div style={{ position: 'relative', marginBottom: '10px' }}>
      <div style={background}></div>
      <Typography variant="h6" gutterBottom style={headingItem}>
        {heading}
      </Typography>
      {goTo && (
        <Button size="small" component={Link} to={goTo} style={btnTogo}>
          {goToText}
        </Button>
      )}
    </div>
  );
};
const background = {
  margin: '0 13px 0 13px',
  height: '50px',
  backgroundColor: '#adbdff',
  clipPath: 'polygon(0 0, 35% 0, 39% 90%, 100% 90%, 100% 100%, 0 100%)',
  paddingBottom: '2px solid #adbdff',
};

const headingItem = {
  position: 'absolute',
  top: 0,
  left: 0,
  margin: '10px 0 10px 30px',
};
const btnTogo = {
  position: 'absolute',
  top: 0,
  right: 0,
  margin: '10px 20px 10px 0',
};

export default Header;
