import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import withStyles from '@material-ui/core/styles/withStyles';

//MUI
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  card: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '345px',
    width: '100%',
    maxWidth: '500px',
    marginBottom: 20,
    height: 400,
  },
  image: {
    minWidth: 400,
    height: 300,
    objectFit: 'cover',
  },
  userShow: {
    height: '30px',
    display: 'flex',
    alignItems: 'center',
  },
};

class Place extends React.Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      place: {
        body,
        description,
        placeImgUrl,
        address,
        contactNo,
        userHandle,
        placeId,
        priceRange,
        createdAt,
        userImage,
        likeCount,
        commentCount,
        viewCount,
      },
    } = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia
          image={placeImgUrl}
          title="House image"
          className={classes.image}
        />
        <CardContent className={classes.content}>
          <Typography
            variant="h5"
            component={Link}
            to={`/place/${placeId}`}
            color="primary"
          >
            {body}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).fromNow()}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            {description}
          </Typography>
          <Link className={classes.userShow} to={`/user/${userHandle}`}>
            <Avatar alt={userHandle} src={userImage} />
            <Typography variant="body1" color="textSecondary">
              Posted By: {userHandle}
            </Typography>
          </Link>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Place);
