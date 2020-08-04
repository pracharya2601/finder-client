import React from 'react';
import { Swipeable } from 'react-swipeable';

import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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

  render() {
    const { classes, placeImgUrl, body, imgHeight, placeId } = this.props;
    console.log(placeImgUrl);

    const { imageIndex = 0 } = this.state;

    const IMG_WIDTH = '100%';
    const IMG_HEIGHT = imgHeight;

    const imageStyles = {
      width: IMG_WIDTH,
      height: IMG_HEIGHT,
      borderTopLeftRadius: '5px',
      borderTopRightRadius: '5px',
      backgroundImage: `url(${placeImgUrl[imageIndex]})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'all 1.0s ease-in-out',
      transition: 'all 1.0s ease-in-out',
      transition: 'all 1.0s ease-in-out',
      transition: 'all 1.0s ease-in-out',
    };
    const buttonStyles = {
      color: 'black',
      marginTop: `calc(${IMG_HEIGHT}/2.5)`,
      border: '0',
      cursor: 'pointer',
      zIndex: '200',
    };
    const buttonLeft = { ...buttonStyles, float: 'left' };
    const buttonRight = { ...buttonStyles, float: 'right' };

    return (
      <div>
        <Swipeable
          trackMouse
          preventDefaultTouchmoveEvent
          onSwipedLeft={() => this.onSwiped(LEFT)}
          onSwipedRight={() => this.onSwiped(RIGHT)}
          style={{ width: IMG_WIDTH }}
        >
          <div style={imageStyles}>
            <IconButton onClick={() => this.onSwiped(RIGHT)} style={buttonLeft}>
              <ArrowBackIosIcon color="primary" fontSize="large" />
            </IconButton>
            <IconButton onClick={() => this.onSwiped(LEFT)} style={buttonRight}>
              <ArrowForwardIosIcon color="primary" fontSize="large" />
            </IconButton>
          </div>
        </Swipeable>
      </div>
    );
  }
}

export default ImageCard;
