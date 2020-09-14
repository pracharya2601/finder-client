import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux';
import { likeItem, unLikeItem } from '../../redux/actions/dataAction';

//mui
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import StarsIcon from '@material-ui/icons/Stars';
import StarIcon from '@material-ui/icons/Star';

class LikeButton extends Component {
  likedItem = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find((like) => like.itemId === this.props.itemId)
    )
      return true;
    else return false;
  };
  likeItem = () => {
    this.props.likeItem(this.props.itemId);
  };
  unLikeItem = () => {
    this.props.unLikeItem(this.props.itemId);
  };

  render() {
    const { authenticated } = this.props.user;

    const likeBtn = !authenticated ? (
      <Tooltip title="Star" placement="top">
        <IconButton fontSize="medium" component={Link} to="/login">
          <StarsIcon fontSize="inherit" color="primary" />
        </IconButton>
      </Tooltip>
    ) : this.likedItem() ? (
      <Tooltip title="undo star" placement="top">
        <IconButton fontSize="medium" onClick={this.unLikeItem}>
          <StarIcon fontSize="inherit" color="primary" />
        </IconButton>
      </Tooltip>
    ) : (
      <Tooltip title="Star" placement="top">
        <IconButton fontSize="medium" onClick={this.likeItem}>
          <StarsIcon fontSize="inherit" color="primary" />
        </IconButton>
      </Tooltip>
    );

    return likeBtn;
  }
}

LikeButton.propTypes = {
  likeItem: PropTypes.func.isRequired,
  unLikeItem: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  itemId: PropTypes.string,
};
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { likeItem, unLikeItem })(LikeButton);
