import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { savePlace, unSavePlace } from '../../redux/actions/dataAction';

//mui
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

//icons
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import MenuItem from '@material-ui/core/MenuItem';
import SaveIcon from '@material-ui/icons/Save';

class SaveButton extends React.Component {
  savedPlace = () => {
    if (
      this.props.user.saved &&
      this.props.user.saved.find((save) => save.placeId === this.props.placeId)
    )
      return true;
    else return false;
  };
  savePlace = () => {
    this.props.savePlace(this.props.placeId);
  };

  unSavePlace = () => {
    this.props.unSavePlace(this.props.placeId);
  };

  render() {
    const { authenticated } = this.props.user;

    const saveBtn = !authenticated ? (
      <MenuItem component={Link} to="/login">
        <IconButton>
          <SaveAltIcon color="primary" />
        </IconButton>
        Save Place
      </MenuItem>
    ) : this.savedPlace() ? (
      <MenuItem onClick={this.unSavePlace}>
        <IconButton>
          <SaveIcon color="primary" />
        </IconButton>
        Unsave Place
      </MenuItem>
    ) : (
      <MenuItem onClick={this.savePlace}>
        <IconButton>
          <SaveAltIcon color="primary" />
        </IconButton>
        Save Place
      </MenuItem>
    );

    return saveBtn;
  }
}

SaveButton.propTypes = {
  savePlace: PropTypes.func.isRequired,
  unSavePlace: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  placeId: PropTypes.string,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { savePlace, unSavePlace })(SaveButton);
