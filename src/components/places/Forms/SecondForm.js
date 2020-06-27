import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';

//mui
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
  form: {
    textAlign: 'center',
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
  cancel: {
    marginTop: '20px',
  },
};

class SecondForm extends React.Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  previous = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    const { placeData, handleChange, classes } = this.props;

    const button =
      placeData.priceRange !== '' &&
      placeData.address !== '' &&
      placeData.contactNo !== '' ? (
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.continue}
        >
          Continue
        </Button>
      ) : null;

    return (
      <div className={classes.form}>
        <div className={classes.loginContainer}>
          <Typography variant="h4">Second step</Typography>
          <Typography variant="body1">
            Please enter address with price range of the place with your contact
            number.
          </Typography>
          <div className={classes.formcontainer}>
            <TextField
              name="priceRange"
              type="number"
              label="Price Range"
              defaultValue={placeData.priceRange}
              onChange={handleChange('priceRange')}
              fullWidth
              className={classes.formField}
            />
            <TextField
              name="Location"
              type="text"
              label="Location of your place"
              defaultValue={placeData.address}
              onChange={handleChange('address')}
              fullWidth
              className={classes.formField}
            />
            <TextField
              name="COntact Info"
              type="text"
              label="Contact Number or email"
              defaultValue={placeData.contactNo}
              onChange={handleChange('contactNo')}
              fullWidth
              className={classes.formField}
            />
            {button}
            <Button
              type="submit"
              variant="contained"
              className={classes.button}
              onClick={this.previous}
            >
              Go Back
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
SecondForm.propsTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SecondForm);
