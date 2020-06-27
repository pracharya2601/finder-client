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
    return (
      <CardMedia className={classes.media} image={placeImgUrl} title={body} />
    );
  }
}

ImageCard.propTypes = {
  classes: PropTypes.object.isRequired,
  body: PropTypes.string.isRequired,
  placeImgUrl: PropTypes.string.isRequired,
};

export default withStyles(styles)(ImageCard);
