import React from 'react';
import { Link } from 'react-router-dom';
import AppIcon from '../images/icon.png';

//redux
import { connect } from 'react-redux';
import { signupUser } from '../redux/actions/userAction';

import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

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
  remainContent: {
    marginTop: '10px',
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

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      email: '',
      handle: '',
      age: '',
      contactNo: '',
      password: '',
      confirmPassword: '',
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
    this.setState({
      loading: true,
    });
    const newUserData = {
      fullName: this.state.fullName,
      email: this.state.email,
      handle: this.state.handle,
      age: this.state.age,
      contactNo: this.state.contactNo,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
    };
    this.props.signupUser(newUserData, this.props.history);
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
            Signup
          </Typography>
          <form
            className={classes.formcontainer}
            noValidate
            onSubmit={this.handleSubmit}
          >
            <TextField
              id="fullName"
              name="fullName"
              type="text"
              label="Your Full Name"
              value={this.state.fullName}
              onChange={this.handleChange}
              helperText={errors.fullName}
              error={errors.fullName ? true : false}
              fullWidth
              className={classes.formField}
            />
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
              id="handle"
              name="handle"
              type="text"
              label="Username"
              value={this.state.handle}
              onChange={this.handleChange}
              helperText={errors.handle}
              error={errors.handle ? true : false}
              fullWidth
              className={classes.formField}
            />
            <TextField
              id="contactNo"
              name="contactNo"
              type="number"
              label="Phone Number"
              value={this.state.contactNo}
              onChange={this.handleChange}
              helperText={errors.contactNo}
              error={errors.contactNo ? true : false}
              fullWidth
              className={classes.formField}
            />
            <TextField
              id="age"
              name="age"
              type="number"
              label="age"
              value={this.state.age}
              onChange={this.handleChange}
              helperText={errors.age}
              error={errors.age ? true : false}
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
            <TextField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              helperText={errors.confirmPassword}
              error={errors.confirmPassword ? true : false}
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
              Signup
              {loading && (
                <CircularProgress size={30} className={classes.progess} />
              )}
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
                to="/signup"
              >
                Login here
              </Button>
            </Typography>
          </form>
        </div>
      </div>
    );
  }
}

Signup.propsTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

export default connect(mapStateToProps, { signupUser })(
  withStyles(styles)(Signup)
);
