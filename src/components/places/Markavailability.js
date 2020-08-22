import React from 'react';

//redux
import { connect } from 'react-redux';
import { markAvailable, markUnavailable } from '../../redux/actions/dataAction';
import MenuItem from '@material-ui/core/MenuItem';

//material ui
import IconButton from '@material-ui/core/IconButton';

//MUI icon
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

class Markavailability extends React.Component {
  markPlaceAvailable = () => {
    const { placeId } = this.props;
    this.props.markAvailable(placeId);
  };
  markPlaceUnAvailable = () => {
    const { placeId } = this.props;
    this.props.markUnavailable(placeId);
  };

  render() {
    const {
      authenticated,
      user: { handle },
      userHandle,
      available,
    } = this.props;
    const markAvailabilityMarkup = available ? (
      <MenuItem onClick={this.markPlaceUnAvailable}>
        <IconButton fontSize="medium">
          <CancelIcon fontSize="inherit" color="primary" />
        </IconButton>
        Mark Unavailable
      </MenuItem>
    ) : (
      <MenuItem onClick={this.markPlaceAvailable}>
        <IconButton fontSize="medium">
          <CheckCircleIcon fontSize="inherit" color="primary" />
        </IconButton>
        Mark Available
      </MenuItem>
    );

    return markAvailabilityMarkup;
  }
}
const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  user: state.user.credentials,
  places: state.data,
});

export default connect(mapStateToProps, { markAvailable, markUnavailable })(
  Markavailability
);
