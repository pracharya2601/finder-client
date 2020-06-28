import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
//mui
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

class ImageCard extends React.Component {
  render() {
    const { classes, placeImgUrl, body } = this.props;

    const image =
      placeImgUrl && body ? (
        <CardMedia className={classes.media} image={placeImgUrl} title={body} />
      ) : (
        <p>Loading</p>
      );

    return image;
  }
}

ImageCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageCard);
