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
import Report from './Report';

//redux
import { connect } from 'react-redux';

import withStyles from '@material-ui/core/styles/withStyles';
//MUI
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
//icons
import ChatIcon from '@material-ui/icons/Chat';
import VisibilityIcon from '@material-ui/icons/Visibility';

const styles = {
  card: {
    width: '100%',
    marginTop: '5px',
    borderRadius: '5px',
  },
  placeHeading: {
    backgroundColor: '#f6fad7',
    height: '30px',
    maxHeight: '30px',
    overflow: 'hide',
    padding: '30px 20px 0 20px',
    borderTop: '5px solid blue',
    borderLeft: '1px solid #e1e6c8',
    borderRight: '1px solid #e1e6c8',
    // textAlign: 'center',
  },
  action: {
    backgroundColor: '#f6fad7',
    padding: '0 0 0 5px',
    borderLeft: '1px solid #e1e6c8',
    borderRight: '1px solid #e1e6c8',
    borderBottom: '1px solid #e1e6c8',
  },
};

class Place extends React.Component {
  render() {
    const {
      classes,
      place: {
        body,
        catagory,
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
      <div className={classes.card}>
        {placeImgUrl && (
          <ImageCard
            placeImgUrl={placeImgUrl}
            imgHeight="250px"
            body={body}
            placeId={placeId}
            catagory={catagory}
            userHandle={userHandle}
            userImage={userImage}
            viewCount={viewCount}
            address={address}
          />
        )}
        <Link to={`/place/${placeId}`}>
          <div className={classes.placeHeading}>{body}</div>
        </Link>

        <div disableSpacing className={classes.action}>
          <LikeButton placeId={placeId} />
          {likeCount}
          <Link to={`/place/${placeId}`}>
            <Tooltip title="comment" placement="top">
              <IconButton size="medium" aria-label="share">
                <ChatIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Link>
          {commentCount}
          <SaveButton placeId={placeId} />
          <Report placeId={placeId} />
        </div>
      </div>
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
