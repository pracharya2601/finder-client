import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import RenderField from '../form/RenderField';
import RenderSelectField from '../form/RenderSelectField';

//redux
import { connect } from 'react-redux';
import { reportPost } from '../../redux/actions/dataAction';

//material ui
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import MenuItem from '@material-ui/core/MenuItem';

const styles = {};

class Report extends React.Component {
  state = {
    open: false,
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onSubmit = (values) => {
    this.props.reportPost(this.props.itemId, values);
    this.handleClose();
  };

  render() {
    const {
      handleSubmit,
      reset,
      classes,
      iconOnly,
      user: { authenticated },
    } = this.props;

    const reportBtn = !authenticated ? (
      <MenuItem component={Link} to="/login">
        Report
      </MenuItem>
    ) : (
      <MenuItem onClick={this.handleClickOpen}>Report</MenuItem>
    );
    return (
      <Fragment>
        <>{reportBtn}</>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            Please select the following applied to the post:
          </DialogTitle>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <DialogContent>
              <Field
                name="type"
                component={RenderSelectField}
                label="Reason for report"
              >
                <MenuItem value={'spam'}>Its suspicious or spam</MenuItem>
                <MenuItem value={'sensative'}>
                  It display sensative information
                </MenuItem>
                <MenuItem value={'abusive'}>It is abusive or harmful</MenuItem>
                <MenuItem value={'misleading'}>Misleading information</MenuItem>
                <MenuItem value={'harmful'}>Harmful intentionals</MenuItem>
              </Field>
              <Field
                name="body"
                multiline
                type="text"
                component={RenderField}
                label="Write your comment to report"
                rows="2"
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
                Report
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </Fragment>
    );
  }
}

Report.propTypes = {
  classes: PropTypes.object.isRequired,
  reportPlace: PropTypes.func,
  itemId: PropTypes.string,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default reduxForm({
  form: 'reportForm',
  // validate,
})(connect(mapStateToProps, { reportPost })(withStyles(styles)(Report)));
