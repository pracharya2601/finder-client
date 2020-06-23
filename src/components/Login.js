import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppIcon from '../images/icon.png';

//redux
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/userAction';

import withStyles from '@material-ui/core/styles/withStyles';

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
  custonError: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: '10px',
  },
};

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData, this.props.history);
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
    const { errors } = this.state;
    return (
      <div className={classes.form}>
        <div className={classes.loginContainer}>
          <img src={AppIcon} alt="logo" className={classes.image} />
          <Typography variant="h3" className={classes.loginTitle}>
            Login
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
              value={this.state.email}
              onChange={this.handleChange}
              helperText={errors.email}
              error={errors.email ? true : false}
              fullWidth
              className={classes.formField}
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              value={this.state.password}
              onChange={this.handleChange}
              helperText={errors.password}
              error={errors.password ? true : false}
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
              // disabled={loading}
            >
              Login
              {loading && (
                <CircularProgress size={30} className={classes.progess} />
              )}
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
          </form>
        </div>
      </div>
    );
  }
}

Login.propsTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

export default connect(mapStateToProps, { loginUser })(
  withStyles(styles)(Login)
);
