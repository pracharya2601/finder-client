import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import uniqid from 'uniqid';

import RenderField from '../form/RenderField';
import RenderSelectField from '../form/RenderSelectField';

//redux
import { connect } from 'react-redux';
import { sendMail } from '../../redux/actions/dataAction';

//material ui
import withStyles from '@material-ui/core/styles/withStyles';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

const styles = {};

class Report extends React.Component {
  state = {
    open: false,
    oldPath: '',
    newPath: '',
  };

  mailingData = (form, id, itemId, catagory, item, email, handle, fullName) => {
    return {
      ...form,
      id: id,
      itemId: itemId,
      catagory: catagory,
      item: item,
      receiverEmail: email,
      handle: handle,
      receiverName: fullName,
    };
  };

  handleClickOpen = () => {
    let oldPath = window.location.pathname;
    const newPath = `/item/${this.props.itemId}/sendmail`;
    if (oldPath === newPath) oldPath = `/`;
    window.history.pushState(null, null, newPath);
    this.setState({ open: true, oldPath, newPath });
  };

  handleClose = () => {
    window.history.pushState(null, null, this.state.oldPath);
    this.setState({ open: false });
  };

  onSubmit = (values) => {
    const {
      itemId,
      catagory,
      item,
      userData: { fullName, email },
      user: {
        credentials: { handle },
      },
    } = this.props;
    let id = uniqid('mail-') + uniqid();
    const mailData = this.mailingData(
      values,
      id,
      itemId,
      catagory,
      item,
      email,
      handle,
      fullName
    );
    this.props.sendMail(mailData);
    console.log(mailData);
    this.handleClose();
  };

  render() {
    const {
      handleSubmit,
      reset,
      classes,
      userData: { fullName },
      user: { authenticated },
    } = this.props;

    const mailBtn = !authenticated ? (
      <MenuItem component={Link} to="/login">
        Send Mail
      </MenuItem>
    ) : (
      <MenuItem onClick={this.handleClickOpen}>Send Mail</MenuItem>
    );
    return (
      <Fragment>
        <>{mailBtn}</>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            You are sending Mail to "{fullName}". Please write a discriptive
            message.
          </DialogTitle>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <DialogContent>
              <Field
                name="senderName"
                type="text"
                component={RenderField}
                label="Full Name"
                itemholder="Write your name"
              />
              <Field
                name="senderEmail"
                type="email"
                component={RenderField}
                label="Email"
                itemholder="Email is required"
              />
              <Field
                name="contactNo"
                type="number"
                component={RenderField}
                label="Phone Number"
                itemholder="Phone Number to contact you"
              />
              <Field
                name="message"
                type="text"
                multiline
                component={RenderField}
                label="Message"
                itemholder="Write a message"
                rows="3"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Send Mail
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default reduxForm({
  form: 'mailForm',
  // validate,
})(connect(mapStateToProps, { sendMail })(withStyles(styles)(Report)));
