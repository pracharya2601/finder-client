import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './place.css';

//components
import DeletePlace from './DeletePlace';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import withStyles from '@material-ui/core/styles/withStyles';

import { connect } from 'react-redux';
import { likePlace, unLikePlace } from '../../redux/actions/dataAction';

//MUI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

//icons
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import StarsIcon from '@material-ui/icons/Stars';
import StarIcon from '@material-ui/icons/Star';
import VisibilityIcon from '@material-ui/icons/Visibility';

const styles = {
  card: {
    minWidth: '320px',
    width: '100%',
    maxWidth: '500px',
    marginTop: '10px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  description: {
    maxHeight: '40px',
    minHeight: '40px',
    overflow: 'auto',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    color: 'green',
  },
  dropdownContent: {
    display: 'flex',
    flexDirection: 'column',
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
      user: {
        authenticated,
        credentials: { handle },
      },
    } = this.props;

    //header
    const header = `${body} [${address}]`;

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

    const optionBtn =
      authenticated && userHandle === handle ? (
        <div className={classes.dropdownContent}>
          <DeletePlace placeId={placeId} />
          <DeletePlace placeId={placeId} />
        </div>
      ) : null;

    const shareBtn = (
      <div className={classes.dropdownContent}>
        <Button color="primary">Share</Button>
      </div>
    );

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="place_body"
              component={Link}
              to={`/user/${userHandle}`}
              alt={userHandle}
              src={userImage}
              className={classes.avatar}
            />
          }
          action={
            <div aria-label="settings" className="dropDown">
              <IconButton>
                <MoreVertIcon />
              </IconButton>
              <div className="dropdown-content">
                {optionBtn}
                {shareBtn}
              </div>
            </div>
          }
          title={header}
          subheader={dayjs(createdAt).fromNow()}
        />
        <CardMedia className={classes.media} image={placeImgUrl} title={body} />
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.description}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {likeButton}
          {likeCount}
          <IconButton aria-label="share">
            <ChatIcon />
          </IconButton>
          {commentCount}
          <IconButton>
            <VisibilityIcon />
          </IconButton>
          {viewCount}
          <span className={classes.expand}>Est.Price: {priceRange}</span>
        </CardActions>
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
