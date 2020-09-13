import React from 'react';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';

const Container = (props) => {
  const { children, direction } = props;

  const style = {
    marginTop: '80px',
  };

  return (
    <Slide direction={direction} in={true} mountOnEnter unmountOnExit>
      <div
        style={{
          maxWidth: '1200px',
          margin: '80px auto 50px auto',
          boxSizing: 'border-box',
        }}
      >
        {children}
      </div>
    </Slide>
  );
};

export default Container;
