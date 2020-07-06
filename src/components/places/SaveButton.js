import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { savePlace, unSavePlace } from '../../redux/actions/dataAction';

//mui
import Button from '@material-ui/core/Button';

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
      <Button color="primary" component={Link} to="/login">
        save
      </Button>
    ) : this.savedPlace() ? (
      <Button color="primary" onClick={this.unSavePlace}>
        unsave
      </Button>
    ) : (
      <Button color="primary" onClick={this.savePlace}>
        save
      </Button>
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
