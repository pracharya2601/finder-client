import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//components
import ImageCard from './ImageCard';
import LikeButton from './LikeButton';
import SaveButton from './SaveButton';
import Report from './Report';

import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
//icons
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';

//redux
import { connect } from 'react-redux';

const styles = {
  card: {
    position: 'relative',
    width: '100%',
    marginTop: '5px',
  },
  descriptionContainer: {
    backgroundColor: '#ffc2c2',
  },
  popItems: {
    position: 'absolute',
    top: '0',
    left: '0',
    display: 'flex',
    marginTop: '10px',
    backgroundColor: '#ffc2c2',
    padding: '0 5px 0 5px',
    borderTopRightRadius: '10px',
    borderBottomRightRadius: '10px',
    cursor: 'pointer',
  },
  itemBottom: {
    position: 'absolute',
    top: '0',
    display: 'flex',
    margin: '236px 0 0 10px',
  },
  price: {
    background: '#5b4e94',
    color: 'white',
    padding: '5px',
    borderRadius: '5px',
    fontSize: '14px',
  },
  catagory: {
    background: '#ffebab',
    color: '#0d4675',
    padding: '5px',
    borderRadius: '5px',
    marginLeft: '5px',
    fontSize: '14px',
  },
  popItem: {
    padding: '5px',
  },
  placeHeading: {
    fontSize: '17px',
    height: '22px',
    overflow: 'hidden',
    color: '#585587',
    padding: '20px 10px 0 10px',
  },
  placeDesc: {
    fontSize: '14px',
    height: '35px',
    overflow: 'hidden',
    padding: '0 10px 0 10px',
  },
  action: {
    padding: '0 0 0 5px',
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
        priceRange,
      },
    } = this.props;
    const catagoryItem =
      catagory === 'sale'
        ? 'For Sale'
        : catagory === 'rental'
        ? 'For Rent'
        : catagory === 'other'
        ? 'Other'
        : null;
    return (
      <div className={classes.card}>
        {placeImgUrl && (
          <ImageCard
            placeImgUrl={placeImgUrl}
            placeId={placeId}
            imgHeight="250px"
          />
        )}
        <div className={classes.descriptionContainer}>
          <div className={classes.popItems}>
            <LocationOnIcon style={{ color: '#5b4e94', marginTop: '2px' }} />
            <div className={classes.popItem}>{address.city},</div>
            <div className={classes.popItem}>{address.district}</div>
          </div>
          <div className={classes.itemBottom}>
            <div className={classes.price}>Rs: {priceRange}</div>
            <div className={classes.catagory}>{catagoryItem}</div>
          </div>

          <IconButton
            style={{
              float: 'right',
              margin: '20px 5px 0 0',
              zIndex: '2000',
            }}
          >
            <MoreVertIcon />
          </IconButton>
          <Link to={`/place/${placeId}`}>
            <div className={classes.placeHeading}>{body}</div>
            <div className={classes.placeDesc}>{description}</div>
          </Link>
          <div className={classes.action}>
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
