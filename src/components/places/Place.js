import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//components
import ImageCard from './ImageCard';
import LikeButton from './LikeButton';
import SaveButton from './SaveButton';
import Report from './Report';
import DeletePlace from './DeletePlace';
import Menus from '../Menu/Menus';
import Markavailability from './Markavailability';

import withStyles from '@material-ui/core/styles/withStyles';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
//icons
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EditIcon from '@material-ui/icons/Edit';
import ChatIcon from '@material-ui/icons/Chat';

//redux
import { connect } from 'react-redux';

const styles = {
  available: {
    position: 'relative',
    width: '100%',
    marginTop: '5px',
    backgroundColor: '#cfd8ff',
    '&:hover': {
      background: '#adbdff',
    },
  },
  notAvailable: {
    position: 'relative',
    width: '100%',
    marginTop: '5px',
    backgroundColor: '#ffabab',
    '&:hover': {
      background: '#ff7373',
    },
  },
  popItems: {
    position: 'absolute',
    top: '0',
    right: '0',
    display: 'flex',
    marginTop: '10px',
    backgroundColor: '#cfd8ff',
    color: '#003d87',
    padding: '0 5px 0 5px',
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
    cursor: 'pointer',
  },
  menuBtn: {
    position: 'absolute',
    top: '0',
    left: '0',
    marginTop: '10px',
    marginLeft: '5px',
    opacity: '0.8',
    backgroundColor: '#cfd8ff',
    borderRadius: '50px',
    '&:hover': {
      opacity: 1,
      background: '#4b62c9',
    },
  },
  itemBottom: {
    position: 'absolute',
    top: '0',
    display: 'flex',
    margin: '236px 0 0 10px',
  },
  price: {
    background: '#4b62c9',
    color: 'white',
    padding: '5px',
    borderRadius: '5px',
    fontSize: '14px',
  },
  catagory: {
    background: '#ff9191',
    color: '#003d87',
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
    color: '#003d87',
    padding: '20px 10px 0 10px',
  },
  placeDesc: {
    fontSize: '14px',
    height: '35px',
    overflow: 'hidden',
    padding: '0 10px 0 10px',
    color: '#4b62c9',
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
        available,
      },
      user: {
        credentials: { handle },
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

    //delete markup
    const sameUser = userHandle === handle ? true : false;
    return (
      <div
        className={`${available ? classes.available : classes.notAvailable}`}
      >
        {placeImgUrl && (
          <ImageCard
            placeImgUrl={placeImgUrl}
            placeId={placeId}
            imgHeight="250px"
          />
        )}
        <div>
          <div className={classes.popItems}>
            <LocationOnIcon style={{ color: '#5b4e94', marginTop: '2px' }} />
            <div className={classes.popItem}>{address.city},</div>
            <div className={classes.popItem}>{address.district}</div>
          </div>
          <div className={classes.menuBtn}>
            <Menus>
              <SaveButton placeId={placeId} />
              <Report placeId={placeId} />
              {sameUser && <DeletePlace placeId={placeId} del />}
              {sameUser && <Markavailability placeId={placeId} />}
              {sameUser && (
                <MenuItem component={Link} to={`/place/edit/${placeId}`}>
                  <IconButton>
                    <EditIcon color="secondary" />
                  </IconButton>
                  Edit
                </MenuItem>
              )}
            </Menus>
          </div>
          <div className={classes.itemBottom}>
            <div className={classes.price}>Rs: {priceRange}</div>
            <div className={classes.catagory}>{catagoryItem}</div>
          </div>
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
