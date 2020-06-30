import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './place.css';

//components
import CardHead from './CardHead';
import ImageCard from './ImageCard';
import Description from './Description';
import PlaceDialog from './PlaceDialog';
import LikeButton from './LikeButton';

//redux
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
//MUI
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
//icons
import ChatIcon from '@material-ui/icons/Chat';

const styles = {
  card: {
    minWidth: '320px',
    width: '100%',
    maxWidth: '500px',
    marginTop: '10px',
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
  description: {
    maxHeight: '55px',
    height: '55px',
    overflow: 'auto',
  },
};

class Place extends React.Component {
  state = {
    openDialog: false,
  };

  commentOpen = () => {
    this.setState({ openDialog: true });
  };

  render() {
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

    return (
      <Card className={classes.card}>
        <CardHead
          userHandle={userHandle}
          userImage={userImage}
          body={body}
          address={address}
          placeId={placeId}
          createdAt={createdAt}
        />
        <ImageCard placeImgUrl={placeImgUrl} body={body} />
        <div className={classes.description}>
          <Description description={description} />
        </div>
        <CardActions disableSpacing>
          <LikeButton placeId={placeId} />
          {likeCount}
          <IconButton aria-label="share" onClick={this.commentOpen}>
            <ChatIcon />
          </IconButton>
          {commentCount}
          <IconButton className={classes.expand}>
            <PlaceDialog
              placeId={placeId}
              userHandle={userHandle}
              className={classes.expand}
              openForComment={this.state.openDialog}
            />
          </IconButton>
          {viewCount}
        </CardActions>
      </Card>
    );
  }
}

Place.propTypes = {
  user: PropTypes.object.isRequired,
  place: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(Place));
