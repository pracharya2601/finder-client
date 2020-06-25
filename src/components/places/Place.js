import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import MyButton from '../buttons/MyButton';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import withStyles from '@material-ui/core/styles/withStyles';

import { connect } from 'react-redux';
import { likePlace, unLikePlace } from '../../redux/actions/dataAction';

//MUI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import ChatIcon from '@material-ui/icons/Chat';
import StarsIcon from '@material-ui/icons/Stars';
import StarIcon from '@material-ui/icons/Star';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ShareIcon from '@material-ui/icons/Share';

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
  descriptionPlace: {
    maxHeight: '50px',
    overflow: 'auto',
  },
  userShow: {
    height: '20px',
    paddingTop: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userLikeShow: {
    height: '10px',
    paddingBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};

class Place extends React.Component {
  likedPlace = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find(
        (like) => like.placeId === this.props.place.placeId
      )
    )
      return true;
    else return false;
  };
  likePlace = () => {
    this.props.likePlace(this.props.place.placeId);
  };
  unLikePlace = () => {
    this.props.unLikePlace(this.props.place.placeId);
  };

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
      user: { authenticated },
    } = this.props;

    const likeButton = !authenticated ? (
      <Tooltip title="Star" placement="top">
        <IconButton component={Link} to="/login">
          <StarsIcon color="primary" />
        </IconButton>
      </Tooltip>
    ) : this.likedPlace() ? (
      <Tooltip title="undo star" placement="top">
        <IconButton onClick={this.unLikePlace}>
          <StarIcon color="primary" />
        </IconButton>
      </Tooltip>
    ) : (
      <Tooltip title="Star" placement="top">
        <IconButton onClick={this.likePlace}>
          <StarsIcon color="primary" />
        </IconButton>
      </Tooltip>
    );

    return (
      <Card className={classes.card}>
        <CardMedia
          image={placeImgUrl}
          title="House image"
          className={classes.image}
        />
        <CardContent className={classes.content}>
          <div className={classes.userLikeShow}>
            <div>
              {likeButton}
              <span>{likeCount} Star</span>
              <Tooltip title="comments" placement="top">
                <IconButton>
                  <ChatIcon color="primary" />
                </IconButton>
              </Tooltip>
              <span>{commentCount} Comments</span>
            </div>
            <div>
              <IconButton>
                <VisibilityIcon color="primary" />
              </IconButton>
              <span>{viewCount}</span>
            </div>
          </div>
          <Divider />
          <div className={classes.userShow}>
            <Typography
              variant="h5"
              component={Link}
              to={`/place/${placeId}`}
              color="primary"
            >
              {body}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Est.Amt: {priceRange}
            </Typography>
          </div>
          <Typography variant="body2" color="textSecondary">
            {dayjs(createdAt).fromNow()}
          </Typography>
          <Typography
            className={classes.descriptionPlace}
            variant="body1"
            color="textSecondary"
          >
            {description}
          </Typography>
          <div className={classes.userShow}>
            <Avatar
              component={Link}
              to={`/user/${userHandle}`}
              alt={userHandle}
              src={userImage}
            />
            <Tooltip title="need to add a link to copied" placement="top">
              <IconButton>
                <ShareIcon color="primary" />
              </IconButton>
            </Tooltip>
          </div>
        </CardContent>
      </Card>
    );
  }
}

Place.propTypes = {
  likePlace: PropTypes.func.isRequired,
  unLikePlace: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  place: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { likePlace, unLikePlace })(
  withStyles(styles)(Place)
);
