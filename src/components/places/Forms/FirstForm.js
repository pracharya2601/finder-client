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

class FirstForm extends React.Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { placeData, handleChange, classes, isAuthenticated } = this.props;
    const button =
      placeData.body !== '' && placeData.description !== '' ? (
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

    const content =
      isAuthenticated === true ? (
        <div className={classes.form}>
          <div className={classes.loginContainer}>
            <Typography variant="h4">First step to post your place</Typography>
            <Typography variant="body1">
              Please enter the main heading and the description that describe
              your place
            </Typography>
            <div className={classes.formcontainer}>
              <TextField
                name="body"
                type="text"
                label="Main heading for place"
                defaultValue={placeData.body}
                onChange={handleChange('body')}
                // helperText={errors.email}
                // error={errors.email ? true : false}
                fullWidth
                className={classes.formField}
              />
              <TextField
                name="description"
                type="text"
                label="Description of your place"
                defaultValue={placeData.description}
                onChange={handleChange('description')}
                // helperText={errors.email}
                // error={errors.email ? true : false}
                fullWidth
                className={classes.formField}
                multiline
                rows="3"
              />
              {button}
              <Button className={classes.cancel} component={Link} to="/">
                cancel
              </Button>
            </div>
          </div>
        </div>
      ) : null;

    return content;
  }
}
FirstForm.propsTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FirstForm);
