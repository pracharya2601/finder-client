import React from 'react';

//material ui
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  media: {
    marginTop: '-10vh',
    marginLeft: '-10%',
    height: '100vh',
    width: '120%',
  },
}));

const LoadingPage = () => {
  const classes = useStyles();
  return <Skeleton animation="wave" variant="rect" className={classes.media} />;
};

export default LoadingPage;
