import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
//recapta
import Recaptcha from 'react-recaptcha';

//image
import AppIcon from '../../images/icon.png';

import { loginUser } from '../../redux/actions/userAction';

import withStyles from '@material-ui/core/styles/withStyles';
//material ui
import Slide from '@material-ui/core/Slide';
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

class Login extends React.Component {
  state = {
    isVerified: false,
  };

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
  verifyHuman = () => {
    console.log('Loaded');
  };

  verifyCallback = (response) => {
    if (response) {
      this.setState({ isVerified: true });
    }
  };

  onSubmit = (values) => {
    if (this.state.isVerified) {
      this.props.loginUser(values, this.props.history);
    } else {
      alert('please verify you are a human');
    }
  };

  render() {
    const {
      handleSubmit,
      reset,
      errorText,
      classes,
      loading: { loading, errors },
      user: { authenticated },
    } = this.props;

    return (
      <Slide direction="down" in={true} mountOnEnter unmountOnExit>
        <Card className={classes.card}>
          <CardActions>
            <img src={AppIcon} alt="logo" className={classes.image} />
          </CardActions>
          <CardActions className={classes.cardAction}>
            <Typography variant="h4" className={classes.text}>
              Login
            </Typography>
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
            <Field
              name="password"
              type="password"
              component={this.renderField}
              label="Password"
              loading={loading}
            />
            <CardActions className={classes.cardAction}>
              <Recaptcha
                sitekey="6Lc0l8AZAAAAALujkZBq1yiL8mnC6ar0M1OsmoAL"
                render="explicit"
                onloadCallback={this.verifyHuman}
                verifyCallback={this.verifyCallback}
              />
            </CardActions>
            <CardActions className={classes.cardAction}>
              {loading && (
                <CircularProgress size={30} className={classes.progess} />
              )}
              {errors && (
                <div className={classes.errorText}>{errors.general}</div>
              )}
              <Button color="primary" variant="contained" type="submit">
                Login
              </Button>
              <Button
                className={classes.forgotPassword}
                component={Link}
                to="/resetpassword"
              >
                Forgot Password ?
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
      </Slide>
    );
  }
}

const validate = (values) => {
  const errorText = {};
  const requiredFields = ['email', 'password'];
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
  form: 'loginForm',
  validate,
})(connect(mapStateToProps, { loginUser })(withStyles(styles)(Login)));
