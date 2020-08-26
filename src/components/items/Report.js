import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

//redux
import { connect } from 'react-redux';
import { reportPost } from '../../redux/actions/dataAction';

//material ui
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import ReportIcon from '@material-ui/icons/Report';
import Tooltip from '@material-ui/core/Tooltip';

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

  renderField = ({
    input,
    label,
    rows,
    meta: { touched, error },
    ...custom
  }) => {
    return (
      <>
        <TextField
          {...input}
          {...custom}
          label={label}
          rows={rows}
          fullWidth
          multiline
          error={touched && error ? true : false}
        />
      </>
    );
  };
  renderSelectField = ({
    input,
    label,
    children,
    meta: { touched, error },
    ...custom
  }) => {
    return (
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select
          {...input}
          error={touched && error ? true : false}
          fullWidth
          {...custom}
        >
          {children}
        </Select>
      </FormControl>
    );
  };

  render() {
    const {
      handleSubmit,
      reset,
      classes,
      iconOnly,
      user: { authenticated },
    } = this.props;
    return (
      <Fragment>
        {authenticated && (
          <>
            <MenuItem onClick={this.handleClickOpen}>
              <IconButton>
                <ReportIcon color="secondary" />
              </IconButton>
              Report
            </MenuItem>
            {iconOnly && (
              <Button color="secondary" onClick={this.handleClickOpen}>
                Report
              </Button>
            )}
          </>
        )}
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
                component={this.renderSelectField}
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
                component={this.renderField}
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
