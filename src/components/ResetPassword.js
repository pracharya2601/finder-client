import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppIcon from '../images/icon.png';

//redux
import { connect } from 'react-redux';
import { resetPassword } from '../redux/actions/userAction';

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
  customMessage: {
    color: 'green',
    fontSize: '1rem',
    marginTop: '10px',
  },
};

class ReserPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      errors: {},
      message: '',
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    } else {
      this.setState({ message: nextProps.UI.message });
      this.setState({ email: '' });
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const userEmail = {
      email: this.state.email,
    };
    this.props.resetPassword(userEmail, this.props.history);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const {
      classes,
      UI: { loading },
    } = this.props;
    const { errors, message } = this.state;
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
          {message && (
            <Typography variant="body2" className={classes.customMessage}>
              {message}
            </Typography>
          )}
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
  classes: PropTypes.object.isRequired,
  resetPassword: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  UI: state.UI,
});

export default connect(mapStateToProps, { resetPassword })(
  withStyles(styles)(ReserPassword)
);
