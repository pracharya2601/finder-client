import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
//image
import AppIcon from '../../images/icon.png';

import { resetPassword } from '../../redux/actions/userAction';

import withStyles from '@material-ui/core/styles/withStyles';
//material ui
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  card: {
    minWidth: '320px',
    width: '90%',
    maxWidth: '500px',
    marginTop: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  image: {
    height: '100px',
    width: '150px',
    margin: '10px auto 20px auto',
  },
  text: {
    textShadow: '2px 2px 4px red',
  },
  form: {
    width: '80%',
    margin: 'auto',
  },
  cardAction: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    margin: '5px 0 10px 0',
  },
  gotoLogin: {
    color: 'green',
    marginTop: '10px',
    textDecoration: 'underline',
  },
  remainContent: {
    marginTop: '5px',
  },
  gotoSignup: {
    color: 'green',
  },
};

class ReserPassword extends React.Component {
  renderField = ({
    input,
    label,
    type,
    loading,
    meta: { touched, error },
    ...custom
  }) => {
    return (
      <>
        <TextField
          {...input}
          {...custom}
          type={type}
          label={label}
          fullWidth
          error={touched && error ? true : false}
        />
        {loading && <LinearProgress />}
      </>
    );
  };

  onSubmit = (values) => {
    this.props.resetPassword(values, this.props.history);
  };

  render() {
    const {
      handleSubmit,
      message,
      classes,
      loading: { loading, errors },
    } = this.props;
    console.log(message);

    return (
      <Card className={classes.card}>
        <CardActions>
          <img src={AppIcon} alt="logo" className={classes.image} />
        </CardActions>
        <CardActions className={classes.cardAction}>
          <Typography variant="h4" className={classes.text}>
            Forgot your password?
          </Typography>
          <Typography variant="body2">
            Enter your email address to reset your password.
          </Typography>
          {message && (
            <Typography variant="body2" className={classes.customMessage}>
              {message}
            </Typography>
          )}
        </CardActions>
        <form
          className={classes.form}
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          <Field
            name="email"
            type="email"
            component={this.renderField}
            label="Email"
            loading={loading}
          />
          <CardActions className={classes.cardAction}>
            {loading && (
              <CircularProgress size={30} className={classes.progess} />
            )}
            {errors && (
              <div className={classes.errorText}>{errors.general}</div>
            )}
            <Button color="primary" variant="contained" type="submit">
              Submit
            </Button>
            <Button className={classes.gotoLogin} component={Link} to="/login">
              Go to Login
            </Button>
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes.remainContent}
            >
              Don't have an account?
              <br />
              <Button
                className={classes.gotoSignup}
                component={Link}
                to="/signup"
              >
                Sign up here
              </Button>
            </Typography>
          </CardActions>
        </form>
      </Card>
    );
  }
}

const validate = (values) => {
  const errorText = {};
  const requiredFields = ['email'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errorText[field] = 'Required';
    }
  });
  return errorText;
};

const mapStateToProps = (state) => ({
  loading: state.UI,
  user: state.user,
});

export default reduxForm({
  form: 'resetPasswordForm',
  validate,
})(
  connect(mapStateToProps, { resetPassword })(withStyles(styles)(ReserPassword))
);
