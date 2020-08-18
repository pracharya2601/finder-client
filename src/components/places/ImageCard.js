import React from 'react';
import { Link } from 'react-router-dom';
import { Swipeable } from 'react-swipeable';

import IconButton from '@material-ui/core/IconButton';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Avatar from '@material-ui/core/Avatar';
// import VisibilityIcon from '@material-ui/icons/Visibility';
import GroupIcon from '@material-ui/icons/Group';
import zIndex from '@material-ui/core/styles/zIndex';
import Tooltip from '@material-ui/core/Tooltip';

const RIGHT = '-1';
const LEFT = '+1';

class ImageCard extends React.Component {
  state = {
    imageIndex: 0,
  };

  onSwiped = (direction) => {
    const { placeImgUrl } = this.props;
    const change = direction === RIGHT ? RIGHT : LEFT;
    const adjustedIndex = this.state.imageIndex + Number(change);
    let newIndex;
    if (adjustedIndex >= placeImgUrl.length) {
      newIndex = 0;
    } else if (adjustedIndex < 0) {
      newIndex = placeImgUrl.length - 1;
    } else {
      newIndex = adjustedIndex;
    }
    this.setState({ imageIndex: newIndex });
  };
  onClicked = () => {
    console.log('Hello');
  };

  render() {
    const {
      classes,
      placeImgUrl,
      body,
      address,
      imgHeight,
      placeId,
      userHandle,
      userImage,
      catagory,
      viewCount,
    } = this.props;

    const { imageIndex = 0 } = this.state;

    const catagoryItem =
      catagory === 'sale'
        ? 'For Sale'
        : catagory === 'rental'
        ? 'For Rent'
        : catagory === 'other'
        ? 'Other'
        : null;

    const IMG_WIDTH = '100%';
    const IMG_HEIGHT = imgHeight;

    const imageStyles = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: IMG_WIDTH,
      height: IMG_HEIGHT,
      backgroundImage: `url(${placeImgUrl[imageIndex]})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'all 1.0s ease-in-out',
      transition: 'all 1.0s ease-in-out',
      transition: 'all 1.0s ease-in-out',
      transition: 'all 1.0s ease-in-out',
      boxSizing: 'border-box',
      borderBottom: '5px solid green',
    };
    const catagoryStyle = {
      marginTop: '10px',
      color: 'white',
      backgroundColor: 'green',
      width: '70px',
      padding: '2px 10px 2px 10px',
      float: 'right',
    };
    const cssBoth = {
      textAlign: 'center',
      float: 'left',
      margin: '10px 10px 0 10px',
      zIndex: '200',
    };
    const iconBtn = {
      ...cssBoth,
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: '0 13px 0 2px',
      border: '1px solid yellow',
    };
    const location = {
      ...cssBoth,
      backgroundColor: '#ffb885',
      padding: '10px 0 10px 0',
      borderRadius: '5px',
    };
    const avatar = {
      margin: '0 0 10px 10px',
      border: '1px solid white',
    };
    return (
      <>
        <Swipeable
          trackMouse
          preventDefaultTouchmoveEvent
          onSwipedLeft={() => this.onSwiped(LEFT)}
          onSwipedRight={() => this.onSwiped(RIGHT)}
          style={{ width: IMG_WIDTH }}
        >
          <div style={imageStyles}>
            <div>
              <Tooltip
                title={`${viewCount} people viewed this place`}
                placement="right"
              >
                <Button size="small" color="primary" startIcon={<GroupIcon />}>
                  {viewCount}
                </Button>
              </Tooltip>
              <div style={catagoryStyle}>{catagoryItem}</div>
            </div>
            <Link to={`/place/${placeId}`}>
              <div
                style={{
                  width: '100%',
                  height: '175px',
                  zIndex: '1000',
                }}
              ></div>
            </Link>
            <div style={location}>
              {/* <Avatar
                aria-label="place_body"
                component={Link}
                to={`/user/profile/${userHandle}`}
                alt={userHandle}
                src={userImage}
                style={avatar}
              /> */}

              {/* <span>{address}</span> */}
              <Button
                size="small"
                color="primary"
                startIcon={<LocationOnIcon />}
              >
                {address}
              </Button>
            </div>
          </div>
        </Swipeable>
      </>
    );
  }
}

export default ImageCard;
