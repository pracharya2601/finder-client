import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: '300px',
    width: '100%',
    marginTop: '10px',
  },
  media: {
    height: 190,
  },
  actionBar: {
    display: 'flex',
    marginTop: '-10',
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
        height={220}
        className={classes.media}
      />
      <CardHeader
        title={
          <Skeleton
            animation="wave"
            height={20}
            width="80%"
            style={{ marginTop: -5 }}
          />
        }
        subheader={<Skeleton animation="wave" height={20} width="40%" />}
      />
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
          className={classes.actionButton}
          animation="wave"
          variant="circle"
          width={30}
          height={30}
        />
      </CardContent>
    </Card>
  );
};

export default SkeletonLoading;
