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
      <Grid container style={style}>
        <Grid item xs={12} sm={1}></Grid>
        <Grid item xs={12} sm={10}>
          {children}
        </Grid>
        <Grid item xs={12} sm={1}></Grid>
      </Grid>
    </Slide>
  );
};

export default Container;
