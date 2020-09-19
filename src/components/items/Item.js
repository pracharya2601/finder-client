import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//icon
import land from '../../images/icons/land.svg';
import floor from '../../images/icons/floor.svg';
import livingroom from '../../images/icons/livingroom.svg';
import bathroom from '../../images/icons/bathroom.svg';

//skeleton
import Skeleton from '../loading/Skeleton';

//components
import ImageCard from './ImageCard';
import LikeButton from './LikeButton';
import SaveButton from './SaveButton';
import Report from './Report';
import DeleteItem from './DeleteItem';
import Menus from '../Menu/Menus';
import Markavailability from './Markavailability';
import Mail from './Mail';
import ShareBtns from '../buttons/ShareBtns';
import IconContainer from './IconContainer';

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

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const styles = {
  available: {
    position: 'relative',
    width: '100%',
    marginTop: '5px',
    backgroundColor: '#cfd8ff',
    backgroundImage: 'linear-gradient(white 250px, #cfd8ff 20%)',
    '&:hover': {
      backgroundColor: '#adbdff',
      backgroundImage: 'linear-gradient(white 250px, #adbdff 20%)',
    },
  },
  notAvailable: {
    position: 'relative',
    width: '100%',
    marginTop: '5px',
    backgroundColor: '#ffabab',
    backgroundImage: 'linear-gradient(white 250px, #ffabab 20%)',
    '&:hover': {
      background: '#ff7373',
      backgroundImage: 'linear-gradient(white 250px, #ff7373 20%)',
    },
  },
  popItems: {
    position: 'absolute',
    top: '0',
    right: '0',
    display: 'flex',
    marginTop: '10px',
    fontSize: '14px',
    backgroundColor: '#cfd8ff',
    color: '#003d87',
    padding: '0',
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
    cursor: 'pointer',
    zIndex: 300,
    '&:hover': {
      opacity: 1,
      background: '#4b62c9',
      color: 'white',
    },
  },
  realstate: {
    position: 'absolute',
    bottom: '0',
    right: '0',
    margin: '0 0 130px 0',
  },
  menuBtn: {
    position: 'absolute',
    top: '0',
    left: '0',
    marginTop: '10px',
    marginLeft: '5px',
    borderRadius: '50%',
    zIndex: '300',
    '&:hover': {
      opacity: 1,
      background: '#cfd8ff',
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
  negotiable: {
    background: '#b3a93e',
    color: 'white',
    padding: '5px',
    borderRadius: '5px',
    fontSize: '14px',
    marginLeft: '5px',
  },
  catagory: {
    // background: '#ff9191',
    color: 'white',
    padding: '5px',
    borderRadius: '5px',
    marginLeft: '5px',
    fontSize: '14px',
  },
  date: {
    color: 'green',
    padding: '5px',
    borderRadius: '5px',
    margin: '20px 6px 0 0',
    position: 'relative',
    fontSize: '10px',
    float: 'right',
  },
  popItem: {
    padding: '5px',
  },
  itemHeading: {
    fontSize: '17px',
    height: '22px',
    overflow: 'hidden',
    color: '#003d87',
    padding: '20px 10px 0 10px',
  },
  itemDesc: {
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

class Item extends React.Component {
  render() {
    dayjs.extend(relativeTime);
    const {
      classes,
      item: {
        name,
        catagory,
        description,
        itemImgUrl,
        address,
        userHandle,
        itemId,
        createdAt,
        userImage,
        likeCount,
        negotiable,
        commentCount,
        realstate,
        viewCount,
        priceRange,
        hasPrice,
        available,
        userData,
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
    const background = {
      background:
        catagory === 'sale'
          ? '#4859a1'
          : catagory === 'rental'
          ? '#923296'
          : catagory === 'other'
          ? '#147568'
          : '#2e3145',
    };
    const sameUser = userHandle === handle ? true : false;

    if (!itemId) {
      return (
        <div style={{ position: 'relative', width: '100%' }}>
          <Skeleton />
        </div>
      );
    }
    return (
      <div
        className={`${available ? classes.available : classes.notAvailable}`}
      >
        {itemImgUrl && (
          <ImageCard
            itemImgUrl={itemImgUrl}
            itemId={itemId}
            imgHeight="250px"
          />
        )}
        <div>
          <a
            className={classes.popItems}
            href={`https://www.google.com/maps/search/?api=1&query=${
              address.city
            }${' '}${address.district}`}
            target="_/blank"
          >
            <LocationOnIcon style={{ color: '#5b4e94', marginTop: '2px' }} />
            <div className={classes.popItem}>
              {address.city}, {address.district}
            </div>
            {/* <div className={classes.popItem}>{address.district}</div> */}
          </a>
          <div className={classes.menuBtn}>
            <Menus>
              <ShareBtns itemId={itemId} item={this.props.item} />
              <SaveButton itemId={itemId} />
              <Report itemId={itemId} />
              {userData && (
                <Mail
                  itemId={itemId}
                  catagory={catagory}
                  item={name}
                  userData={userData}
                />
              )}

              {sameUser && <DeleteItem itemId={itemId} del />}
              {sameUser && (
                <Markavailability itemId={itemId} available={available} />
              )}
              {sameUser && (
                <MenuItem component={Link} to={`/edit/${itemId}/${catagory}`}>
                  Edit
                </MenuItem>
              )}
            </Menus>
          </div>
          {realstate && (
            <div className={classes.realstate}>
              <IconContainer
                icon={livingroom}
                value={realstate.livingroom}
                itemcard
              />
              <IconContainer
                icon={bathroom}
                value={realstate.bathroom}
                itemcard
              />
              <IconContainer icon={floor} value={realstate.floor} itemcard />
              <IconContainer icon={land} value={realstate.area} itemcard />
            </div>
          )}
          <div className={classes.itemBottom}>
            {hasPrice && <div className={classes.price}>Rs: {priceRange}</div>}
            {hasPrice && negotiable && (
              <div className={classes.negotiable}>Negotiable</div>
            )}
            <div className={classes.catagory} style={background}>
              {catagoryItem}
            </div>
          </div>
          <div className={classes.date}>{dayjs(createdAt).fromNow()}</div>
          <Link to={`/item/${itemId}`}>
            <div className={classes.itemHeading}>{name}</div>
            <div className={classes.itemDesc}>{description}</div>
          </Link>
          <div className={classes.action}>
            <LikeButton itemId={itemId} />
            {likeCount}
            <Link to={`/item/${itemId}`}>
              <Tooltip title="comment" itemment="top">
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

Item.propTypes = {
  user: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(Item));
