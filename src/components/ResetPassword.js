import React from 'react';
import { Link } from 'react-router-dom';
import AppIcon from '../images/icon.png';
import axios from 'axios';

import withStyles from '@material-ui/core/styles/withStyles';
import PropsTypes from 'prop-types';

//Mui
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

const styles = {
  form: {
    textAlign: 'center',
  },
  image: {
    height: '100px',
    width: '150px',
    margin: '10px auto 20px auto',
  },
  formcontainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  formField: {
    width: '80%',
    minWidth: '300px',
    maxWidth: '500px',
    marginTop: '10px',
  },
  button: {
    marginTop: '20px',
    width: '150px',
    position: 'relative',
  },
  progess: {
    position: 'absolute',
    color: 'white',
  },
  forgotPassword: {
    color: 'blue',
    marginTop: '10px',
    textDecoration: 'underline',
  },
  remainContent: {
    marginTop: '5px',
  },
  gotoSignup: {
    color: 'green',
  },
  custonError: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: '10px',
  },
};

class ReserPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      loading: false,
      errors: {},
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });
    const userEmail = {
      email: this.state.email,
    };
    axios
      .post(
        'https://us-central1-cocoontechlab.cloudfunctions.net/api/resetpassword',
        userEmail
      )
      .then((res) => {
        this.setState({
          loading: false,
        });
        this.props.history.push('/login');
        alert(res.data.message);
      })
      .catch((err) => {
        this.setState({
          errors: err.response.data,
          loading: false,
        });
      });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { errors, loading } = this.state;
    return (
      <div className={classes.form}>
        <div className={classes.loginContainer}>
          <img src={AppIcon} alt="logo" className={classes.image} />
          <Typography variant="h5" className={classes.loginTitle}>
            Forgot your password?
          </Typography>
          <Typography variant="body2" className={classes.loginTitle}>
            Enter your email address to reset your password.
          </Typography>
          <form
            className={classes.formcontainer}
            noValidate
            onSubmit={this.handleSubmit}
          >
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              className={classes.TextField}
              value={this.state.email}
              onChange={this.handleChange}
              helperText={errors.email}
              error={errors.email ? true : false}
              fullWidth
              className={classes.formField}
            />
            {errors.general && (
              <Typography variant="body2" className={classes.custonError}>
                {errors.general}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={loading}
            >
              Submit
              {loading && (
                <CircularProgress size={30} className={classes.progess} />
              )}
            </Button>
            <Button
              className={classes.forgotPassword}
              component={Link}
              to="/login"
            >
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
          </form>
        </div>
      </div>
    );
  }
}

ReserPassword.propsTypes = {
  classes: PropsTypes.object.isRequired,
};

export default withStyles(styles)(ReserPassword);
