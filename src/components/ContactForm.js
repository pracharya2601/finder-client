import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import uniqid from 'uniqid';

//recapta
import Recaptcha from 'react-recaptcha';

import RenderField from './form/RenderField';

//redux
import { connect } from 'react-redux';
import { contactUs } from '../redux/actions/dataAction';

//material ui
import withStyles from '@material-ui/core/styles/withStyles';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

const styles = {
  textBtn: {
    color: 'white',
    cursor: 'pointer',
    '&:hover': {
      color: '#faf2c8',
      textDecoration: 'underline',
    },
  },
};

class ContactForm extends React.Component {
  state = {
    open: false,
    oldPath: '',
    newPath: '',
    isVerified: false,
  };

  verifyHuman = () => {
    console.log('Loaded');
  };

  verifyCallback = (response) => {
    if (response) {
      this.setState({ isVerified: true });
    }
  };

  mailingData = (form, id) => {
    return {
      ...form,
      id: id,
    };
  };

  handleClickOpen = () => {
    let oldPath = window.location.pathname;
    const newPath = `/contact/easypezy`;
    if (oldPath === newPath) oldPath = `/`;
    window.history.pushState(null, null, newPath);
    this.setState({ open: true, oldPath, newPath });
  };

  handleClose = () => {
    window.history.pushState(null, null, this.state.oldPath);
    this.setState({ open: false });
  };

  onSubmit = (values) => {
    if (this.state.isVerified) {
      let id = uniqid('contact-') + uniqid();
      const mailData = this.mailingData(values, id);
      this.props.contactUs(mailData);
      this.handleClose();
    } else {
      alert('please verify you are a human');
    }
  };

  render() {
    const { handleSubmit, reset, classes } = this.props;

    return (
      <Fragment>
        <div onClick={this.handleClickOpen} className={classes.textBtn}>
          Contact Us
        </div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Please write a discriptive message:
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
                name="about"
                type="test"
                component={RenderField}
                label="About"
                itemholder="Reason for contacting.."
              />
              <Field
                name="message"
                type="text"
                multiline
                component={RenderField}
                label="Message"
                itemholder="Write a message"
                rows="4"
              />
              <Field
                name="suggestion"
                type="text"
                multiline
                component={RenderField}
                label="Any Suggestion"
                itemholder="Write a message"
                rows="3"
              />
            </DialogContent>
            <DialogActions>
              <Recaptcha
                sitekey="6Lc0l8AZAAAAALujkZBq1yiL8mnC6ar0M1OsmoAL"
                render="explicit"
                onloadCallback={this.verifyHuman}
                verifyCallback={this.verifyCallback}
              />
            </DialogActions>
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

export default reduxForm({
  form: 'contactForm',
  // validate,
})(connect(null, { contactUs })(withStyles(styles)(ContactForm)));
