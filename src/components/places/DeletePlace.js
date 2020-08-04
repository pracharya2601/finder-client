import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import history from '../../history';
//redux
import { connect } from 'react-redux';
import { deletePlace } from '../../redux/actions/dataAction';

//material ui
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

const styles = {};

class DeletePlace extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    history.push('/');
  };

  deletePlace = () => {
    this.props.deletePlace(this.props.placeId);
    this.handleClose();
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Tooltip title="delete" placement="top">
          <IconButton color="secondary" onClick={this.handleClickOpen}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Are you sure you want to delete?
          </DialogTitle>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.deletePlace} color="secondary">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

DeletePlace.propTypes = {
  classes: PropTypes.object.isRequired,
  deletePlace: PropTypes.func.isRequired,
  placeId: PropTypes.string,
};

export default connect(null, { deletePlace })(withStyles(styles)(DeletePlace));
