import React, { Fragment } from 'react';

import Facebook from 'react-sharingbuttons/dist/buttons/Facebook';
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter';
import Email from 'react-sharingbuttons/dist/buttons/Email';

//material ui
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import MenuItem from '@material-ui/core/MenuItem';

import 'react-sharingbuttons/dist/main.css';

const styles = {};

class ShareBtns extends React.Component {
  state = {
    open: false,
    btntext: 'Copy Link',
    variant: 'contained',
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = () => {
    this.props.onClick();
    this.handleClose();
  };
  copyLink = () => {
    navigator.clipboard.writeText(
      `https://easypezy.com/#/item/${this.props.itemId}`
    );
    this.setState({ btntext: 'copied', variant: 'outlined' });
  };

  render() {
    const { itemId, text } = this.props;
    const url = `https://easypezy.com/#/item/${itemId}`;
    const shareText = text;
    return (
      <Fragment>
        <MenuItem onClick={this.handleClickOpen}>Share</MenuItem>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle id="form-dialog-title">Share this post on:</DialogTitle>
          <DialogContent>
            <div>
              <Facebook url={url} shareText={shareText} />
              <Email url={url} shareText={shareText} />
              <Twitter url={url} shareText={shareText} />
              <Button
                variant={this.state.variant}
                color="primary"
                onClick={this.copyLink}
              >
                {this.state.btntext}
              </Button>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default ShareBtns;
