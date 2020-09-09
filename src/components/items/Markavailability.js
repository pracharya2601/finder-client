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
  markItemAvailable = () => {
    const { itemId } = this.props;
    this.props.markAvailable(itemId);
  };
  markItemUnAvailable = () => {
    const { itemId } = this.props;
    this.props.markUnavailable(itemId);
  };

  render() {
    const {
      authenticated,
      user: { handle },
      userHandle,
      available,
    } = this.props;
    console.log(this.props);
    const markAvailabilityMarkup = available ? (
      <MenuItem onClick={this.markItemUnAvailable}>Mark Unavailable</MenuItem>
    ) : (
      <MenuItem onClick={this.markItemAvailable}>Mark Available</MenuItem>
    );

    return markAvailabilityMarkup;
  }
}
const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
  user: state.user.credentials,
});

export default connect(mapStateToProps, { markAvailable, markUnavailable })(
  Markavailability
);
