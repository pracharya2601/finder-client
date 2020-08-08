import React from 'react';
import { Link } from 'react-router-dom';
import { Swipeable } from 'react-swipeable';

import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Avatar from '@material-ui/core/Avatar';
import VisibilityIcon from '@material-ui/icons/Visibility';

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
    console.log(this.props.placeId);
  };

  render() {
    const {
      classes,
      placeImgUrl,
      body,
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
        : 'Other';

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
    };
    const catagoryStyle = {
      marginTop: '10px',
      color: 'white',
      backgroundColor: 'green',
      width: '70px',
      padding: '2px 10px 2px 10px',
      float: 'right',
    };
    const iconBtn = {
      backgroundColor: 'white',
      padding: '0 13px 0 2px',
      borderRadius: '20px',
      float: 'left',
      margin: '10px 0 0 10px',
      border: '1px solid yellow',
      zIndex: '200',
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
          component={Link}
          to={`/place/${placeId}`}
        >
          <div style={imageStyles}>
            <div>
              <div style={iconBtn}>
                <IconButton size="small">
                  <VisibilityIcon />
                </IconButton>
                <span style={{ margin: '20px 0 0 5px' }}>{viewCount}</span>
              </div>
              <div style={catagoryStyle}>{catagoryItem}</div>
            </div>
            <Avatar
              aria-label="place_body"
              component={Link}
              to={`/user/profile/${userHandle}`}
              alt={userHandle}
              src={userImage}
              style={avatar}
            />
          </div>
        </Swipeable>
      </>
    );
  }
}

export default ImageCard;
