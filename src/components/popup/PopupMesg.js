import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';

const PopupMesg = ({ del, report }) => {
  if (del)
    return (
      <DialogTitle id="form-dialog-title">
        Are you sure you want to delete?
      </DialogTitle>
    );
  if (report)
    return (
      <DialogTitle id="form-dialog-title">
        Please select the following applied to the post
      </DialogTitle>
    );
  return null;
};

export default PopupMesg;
