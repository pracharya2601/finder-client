import React, { Fragment } from 'react';
import PopupMesg from '../popup/PopupMesg';

//material ui
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';

const styles = {};

class Modal extends React.Component {
  state = {
    open: false,
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

  render() {
    const {
      classes,
      report,
      del,
      placeId,
      submit,
      cancel,
      onClick,
      children,
    } = this.props;
    const headingMarkup = <PopupMesg {...this.props} />;

    const btnMarkup = del ? <DeleteIcon /> : null;
    const tollTipMarkup = del ? 'delete' : null;
    const submitMarkup = del ? 'delete' : null;
    const cancelBtn = cancel ? 'cancel' : 'okay';
    // const content = report ? <ReportForm /> : null
    return (
      <Fragment>
        <Tooltip title={tollTipMarkup} placement="top">
          <IconButton color="secondary" onClick={this.handleClickOpen}>
            {btnMarkup}
          </IconButton>
        </Tooltip>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          {headingMarkup}
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              {cancelBtn}
            </Button>
            {submit && (
              <Button onClick={this.handleSubmit} color="secondary">
                {submitMarkup}
              </Button>
            )}
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

export default Modal;
