import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux';
import { likePlace, unLikePlace } from '../../redux/actions/dataAction';

//mui
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import StarsIcon from '@material-ui/icons/Stars';
import StarIcon from '@material-ui/icons/Star';

class LikeButton extends Component {
  likedPlace = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find((like) => like.placeId === this.props.placeId)
    )
      return true;
    else return false;
  };
  likePlace = () => {
    this.props.likePlace(this.props.placeId);
  };
  unLikePlace = () => {
    this.props.unLikePlace(this.props.placeId);
  };

  render() {
    const { authenticated } = this.props.user;

    const likeBtn = !authenticated ? (
      <Tooltip title="Star" placement="top">
        <IconButton component={Link} to="/login">
          <StarsIcon color="primary" />
        </IconButton>
      </Tooltip>
    ) : this.likedPlace() ? (
      <Tooltip title="undo star" placement="top">
        <IconButton onClick={this.unLikePlace}>
          <StarIcon color="primary" />
        </IconButton>
      </Tooltip>
    ) : (
      <Tooltip title="Star" placement="top">
        <IconButton onClick={this.likePlace}>
          <StarsIcon color="primary" />
        </IconButton>
      </Tooltip>
    );

    return likeBtn;
  }
}

LikeButton.propTypes = {
  likePlace: PropTypes.func.isRequired,
  unLikePlace: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  placeId: PropTypes.string,
};
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { likePlace, unLikePlace })(LikeButton);
