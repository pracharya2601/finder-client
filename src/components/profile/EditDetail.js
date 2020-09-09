import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

//redux
import { connect } from 'react-redux';
import { editUserDetails } from '../../redux/actions/userAction';

//material ui
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = {};

class EditDetail extends React.Component {
  state = {
    bio: '',
    website: '',
    location: '',
    contactNo: '',
    open: false,
  };

  userDetailToState = (credentials) => {
    this.setState({
      bio: credentials.bio ? credentials.bio : '',
      website: credentials.website ? credentials.website : '',
      location: credentials.location ? credentials.location : '',
      contactNo: credentials.contactNo ? credentials.contactNo : '',
    });
  };

  componentDidMount() {
    const { credentials } = this.props;
    this.userDetailToState(this.props.credentials);
  }

  handleClickOpen = () => {
    this.setState({ open: true });
    this.userDetailToState(this.props.credentials);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = () => {
    const userDetail = {
      bio: this.state.bio,
      website: this.state.website,
      location: this.state.location,
      contactNo: this.state.contactNo,
    };
    this.props.editUserDetails(userDetail);
    this.handleClose();
  };

  render() {
    return (
      <Fragment>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.handleClickOpen}
        >
          Edit
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Edit your details</DialogTitle>
          <form>
            <DialogContent>
              <TextField
                name="bio"
                label="Bio"
                type="text"
                multiline
                rows="2"
                placeholder="Write short bio about yourself"
                fullWidth
                value={this.state.bio}
                onChange={this.handleChange}
              />
              <TextField
                name="website"
                label="Social Media account"
                type="text"
                placeholder="Your personal site"
                fullWidth
                value={this.state.website}
                onChange={this.handleChange}
              />
              <TextField
                name="location"
                label="Your Location"
                type="text"
                placeholder="Your adderess"
                fullWidth
                value={this.state.location}
                onChange={this.handleChange}
              />
              <TextField
                name="contactNo"
                label="Phone Number"
                type="tel"
                placeholder="Your phone number"
                fullWidth
                value={this.state.location}
                onChange={this.handleChange}
              />
            </DialogContent>
          </form>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

EditDetail.propTypes = {
  editUserDetails: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  credentials: state.user.credentials,
});

export default connect(mapStateToProps, { editUserDetails })(
  withStyles(styles)(EditDetail)
);
