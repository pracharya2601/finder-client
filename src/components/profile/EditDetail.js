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
import Tooltip from '@material-ui/core/Tooltip';

const styles = {};

class EditDetail extends React.Component {
  state = {
    bio: '',
    website: '',
    location: '',
    open: false,
  };

  userDetailToState = (credentials) => {
    this.setState({
      bio: credentials.bio ? credentials.bio : '',
      bio: credentials.website ? credentials.website : '',
      bio: credentials.location ? credentials.location : '',
    });
  };

  componentDidMount() {
    const { credentials } = this.props;
    this.userDetailToState(this.props.credentials);
  }

  handleClickOpen = () => {
    this.setState({ oprn: true });
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
    };
    this.props.editUserDetails(userDetail);
    this.handleClose();
  };

  render() {
    return (
      <Fragment>
        <Tooltip title="Edit detail">
          <Button onClick={this.handleClickOpen}>edit detail</Button>
          <Dialog onClose={this.handleClose} open={this.state.open}>
            <DialogTitle>Edit your details</DialogTitle>
            <DialogContent>
              <form>
                <TextField
                  name="bio"
                  label="Bio"
                  type="text"
                  multiline
                  rows="2"
                  placeholder="Write short bio about yourself"
                  value={this.state.bio}
                  onChange={this.handleChange}
                  fullWidth
                />
                <TextField
                  name="website"
                  label="Social Media account or personal website"
                  type="text"
                  placeholder="Your personal site"
                  value={this.state.website}
                  onChange={this.handleChange}
                  fullWidth
                />
                <TextField
                  name="location"
                  label="Location"
                  type="text"
                  placeholder="Your adderess"
                  value={this.state.location}
                  onChange={this.handleChange}
                  fullWidth
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button
                onClick={this.handleClose}
                onClick={this.handleSubmit}
                color="primary"
              >
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </Tooltip>
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
