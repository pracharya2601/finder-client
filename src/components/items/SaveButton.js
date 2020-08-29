import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { saveItem, unSaveItem } from '../../redux/actions/dataAction';

//mui
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

//icons
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import MenuItem from '@material-ui/core/MenuItem';
import SaveIcon from '@material-ui/icons/Save';

class SaveButton extends React.Component {
  savedItem = () => {
    if (
      this.props.user.saved &&
      this.props.user.saved.find((save) => save.itemId === this.props.itemId)
    )
      return true;
    else return false;
  };
  saveItem = () => {
    this.props.saveItem(this.props.itemId);
  };

  unSaveItem = () => {
    this.props.unSaveItem(this.props.itemId);
  };

  render() {
    const { authenticated } = this.props.user;

    const saveBtn = !authenticated ? (
      <MenuItem component={Link} to="/login">
        Save
      </MenuItem>
    ) : this.savedItem() ? (
      <MenuItem onClick={this.unSaveItem}>Unsave</MenuItem>
    ) : (
      <MenuItem onClick={this.saveItem}>Save</MenuItem>
    );

    return saveBtn;
  }
}

SaveButton.propTypes = {
  saveItem: PropTypes.func.isRequired,
  unSaveItem: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  itemId: PropTypes.string,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { saveItem, unSaveItem })(SaveButton);
