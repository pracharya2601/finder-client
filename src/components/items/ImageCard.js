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
import Tooltip from '@material-ui/core/Tooltip';

const RIGHT = '-1';
const LEFT = '+1';

class ImageCard extends React.Component {
  state = {
    imageIndex: 0,
  };

  onSwiped = (direction) => {
    const { itemImgUrl } = this.props;
    const change = direction === RIGHT ? RIGHT : LEFT;
    const adjustedIndex = this.state.imageIndex + Number(change);
    let newIndex;
    if (adjustedIndex >= itemImgUrl.length) {
      newIndex = 0;
    } else if (adjustedIndex < 0) {
      newIndex = itemImgUrl.length - 1;
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
      itemImgUrl,
      name,
      address,
      imgHeight,
      itemId,
      userHandle,
      userImage,
      catagory,
      viewCount,
    } = this.props;

    const { imageIndex = 0 } = this.state;

    const IMG_WIDTH = '100%';
    const IMG_HEIGHT = imgHeight;

    const imageStyles = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: IMG_WIDTH,
      height: IMG_HEIGHT,
      backgroundImage: `url(${itemImgUrl[imageIndex]})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'all 1.0s ease-in-out',
      transition: 'all 1.0s ease-in-out',
      transition: 'all 1.0s ease-in-out',
      transition: 'all 1.0s ease-in-out',
    };
    return (
      <Swipeable
        trackMouse
        preventDefaultTouchmoveEvent
        onSwipedLeft={() => this.onSwiped(LEFT)}
        onSwipedRight={() => this.onSwiped(RIGHT)}
        style={{ width: IMG_WIDTH }}
      >
        <div style={imageStyles}>
          {/* <div>
              <Tooltip
                title={`${viewCount} people viewed this item`}
                itemment="right"
              >
                <Button size="small" color="primary" startIcon={<GroupIcon />}>
                  {viewCount}
                </Button>
              </Tooltip>
              <div style={catagoryStyle}>{catagoryItem}</div>
            </div> */}
          <Link to={`/item/${itemId}`}>
            <div
              style={{
                width: '100%',
                height: '245px',
                zIndex: '1000',
              }}
            ></div>
          </Link>
        </div>
      </Swipeable>
    );
  }
}

export default ImageCard;
