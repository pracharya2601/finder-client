import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
//image
import AppIcon from '../../images/icon.png';

import { signupUser } from '../../redux/actions/userAction';

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
    textShadow: '2px 2px 4px green',
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
  forgotPassword: {
    color: 'red',
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

class Signup extends React.Component {
  renderField = ({
    input,
    label,
    type,
    loading,
    helperText,
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
          helperText={helperText}
          fullWidth
          error={(touched && error) || helperText ? true : false}
        />
      </>
    );
  };

  onSubmit = (values) => {
    this.props.signupUser(values, this.props.history);
  };

  render() {
    const {
      handleSubmit,
      classes,
      loading: { loading, errors },
      user: { authenticated },
    } = this.props;
    const errorTextHandle = errors ? errors.handle : null;
    const errorTextEmail = errors ? errors.email : null;
    const errorTextPassword = errors ? errors.password : null;
    const errorTextConfirmPassword = errors ? errors.confirmPassword : null;
    const errotTextContactNo = errors ? errors.contactNo : null;
    const errorTextAge = errors ? errors.age : null;
    return (
      <Card className={classes.card}>
        <CardActions>
          <img src={AppIcon} alt="logo" className={classes.image} />
        </CardActions>
        <CardActions className={classes.cardAction}>
          <Typography variant="h4" className={classes.text}>
            Sign Up
          </Typography>
        </CardActions>
        <form
          className={classes.form}
          onSubmit={handleSubmit(this.onSubmit.bind(this))}
        >
          <Field
            name="fullName"
            type="text"
            component={this.renderField}
            label="Full Name"
          />
          <Field
            name="email"
            type="email"
            component={this.renderField}
            label="Email"
            helperText={errorTextEmail}
          />
          <Field
            name="handle"
            type="text"
            component={this.renderField}
            label="Unique Username"
            helperText={errorTextHandle}
          />
          <Field
            name="password"
            type="password"
            component={this.renderField}
            label="Password"
            helperText={errorTextPassword}
          />
          <Field
            name="confirmPassword"
            type="password"
            component={this.renderField}
            label="Confirm Password"
            helperText={errorTextConfirmPassword}
          />
          <Field
            name="contactNo"
            type="number"
            component={this.renderField}
            label="Contact Number"
            helperText={errotTextContactNo}
          />
          <Field
            name="age"
            type="number"
            component={this.renderField}
            label="Age"
            helperText={errorTextAge}
          />
          <CardActions className={classes.cardAction}>
            {loading && (
              <CircularProgress size={30} className={classes.progess} />
            )}
            {errors && (
              <div className={classes.errorText}>{errors.general}</div>
            )}
            <Button color="primary" variant="contained" type="submit">
              Sign Up
            </Button>
            <Typography
              variant="body1"
              color="textSecondary"
              className={classes.remainContent}
            >
              Already have an account?
              <br />
              <Button
                className={classes.gotoSignup}
                component={Link}
                to="/login"
              >
                Login here
              </Button>
            </Typography>
          </CardActions>
        </form>
        {loading && <LinearProgress />}
      </Card>
    );
  }
}

const validate = (values) => {
  const errorText = {};
  const requiredFields = [
    'email',
    'password',
    'confirmPassword',
    'fullName',
    'handle',
    'age',
    'contactNo',
  ];
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
  form: 'signUpForm',
  validate,
})(connect(mapStateToProps, { signupUser })(withStyles(styles)(Signup)));
