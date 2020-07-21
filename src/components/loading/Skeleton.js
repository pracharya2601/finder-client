import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: '320px',
    width: '100%',
    maxWidth: '500px',
    marginTop: '10px',
  },
  media: {
    height: 190,
  },
  actionBar: {
    display: 'flex',
  },
  actionButton: {
    marginRight: '10px',
  },
  actionButtonExpand: {
    marginLeft: 'auto',
  },
}));

const SkeletonLoading = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Skeleton
        animation="wave"
        variant="rect"
        height={260}
        className={classes.media}
      />

      <CardContent>
        {/* <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width="80%" /> */}
      </CardContent>
      <CardContent className={classes.actionBar}>
        <Skeleton
          className={classes.actionButton}
          animation="wave"
          variant="circle"
          width={30}
          height={30}
        />
        <Skeleton
          className={classes.actionButton}
          animation="wave"
          variant="circle"
          width={30}
          height={30}
        />
        <Skeleton
          className={classes.actionButton}
          animation="wave"
          variant="circle"
          width={30}
          height={30}
        />
        <Skeleton
          className={classes.actionButtonExpand}
          animation="wave"
          variant="circle"
          width={30}
          height={30}
        />
      </CardContent>
      <CardHeader
        avatar={
          <Skeleton animation="wave" variant="circle" width={40} height={40} />
        }
        title={
          <Skeleton
            animation="wave"
            height={10}
            width="80%"
            style={{ marginBottom: 6 }}
          />
        }
        subheader={<Skeleton animation="wave" height={10} width="40%" />}
      />
    </Card>
  );
};

export default SkeletonLoading;
