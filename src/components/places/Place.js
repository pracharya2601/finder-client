import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './place.css';

//components
import CardHead from './CardHead';
import ImageCard from './ImageCard';
import Description from './Description';
import LikeButton from './LikeButton';
import SaveButton from './SaveButton';

//redux
import { connect } from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
//MUI
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
//icons
import ChatIcon from '@material-ui/icons/Chat';
import VisibilityIcon from '@material-ui/icons/Visibility';

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
};

class Place extends React.Component {
  render() {
    const {
      classes,
      place: {
        body,
        description,
        placeImgUrl,
        address,
        userHandle,
        placeId,
        createdAt,
        userImage,
        likeCount,
        commentCount,
        viewCount,
      },
    } = this.props;

    return (
      <Card className={classes.card}>
        {placeImgUrl && (
          <ImageCard placeImgUrl={placeImgUrl} imgHeight="250px" body={body} />
        )}
        {/* <div>
          <Description description={description} />
        </div> */}
        <CardActions disableSpacing>
          <LikeButton placeId={placeId} />
          {likeCount}
          <Link to={`/place/${placeId}`}>
            <IconButton aria-label="share">
              <ChatIcon />
            </IconButton>
          </Link>
          {commentCount}
          <SaveButton placeId={placeId} />
          <Link to={`/place/${placeId}`} className={classes.expand}>
            <IconButton>
              <VisibilityIcon />
            </IconButton>
          </Link>
          {viewCount}
        </CardActions>
        <CardHead
          userHandle={userHandle}
          userImage={userImage}
          body={body}
          address={address}
          placeId={placeId}
          createdAt={createdAt}
        />
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
