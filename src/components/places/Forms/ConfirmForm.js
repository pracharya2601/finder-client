import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';

//mui

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import TitleIcon from '@material-ui/icons/Title';
import DescriptionIcon from '@material-ui/icons/Description';
import PinDropIcon from '@material-ui/icons/PinDrop';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ContactsIcon from '@material-ui/icons/Contacts';

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
  detailPart: {
    marginLeft: '20px',
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

class ConfirmForm extends React.Component {
  submitForm = (e) => {
    e.preventDefault();
    this.props.submitForm(e);
  };

  previous = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    const {
      classes,
      placeData: { body, description, address, contactNo, priceRange },
    } = this.props;

    return (
      <div className={classes.form}>
        <div className={classes.loginContainer}>
          <Typography variant="h4">
            Please make sure before it submit
          </Typography>
          <Typography variant="body1">
            You're about to post your place
          </Typography>
          <div className={classes.formcontainer}>
            <List>
              <Tooltip title="Title of your Place" placement="top">
                <ListItem>
                  <ListItemIcon>
                    <TitleIcon />:
                  </ListItemIcon>
                  <ListItemText>{body}</ListItemText>
                </ListItem>
              </Tooltip>
              <Tooltip title="Description" placement="top">
                <ListItem>
                  <ListItemIcon>
                    <DescriptionIcon />:
                  </ListItemIcon>
                  <ListItemText>{description}</ListItemText>
                </ListItem>
              </Tooltip>
              <Tooltip title="Location" placement="top">
                <ListItem>
                  <ListItemIcon>
                    <PinDropIcon />:
                  </ListItemIcon>
                  <ListItemText>{address}</ListItemText>
                </ListItem>
              </Tooltip>
              <Tooltip title="Price Range" placement="top">
                <ListItem>
                  <ListItemIcon>
                    <LocalOfferIcon />:
                  </ListItemIcon>
                  <ListItemText>{priceRange}</ListItemText>
                </ListItem>
              </Tooltip>
              <Tooltip title="Contact" placement="top">
                <ListItem>
                  <ListItemIcon>
                    <ContactsIcon />:
                  </ListItemIcon>
                  <ListItemText>{contactNo}</ListItemText>
                </ListItem>
              </Tooltip>
            </List>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.submitForm}
            >
              Confirm & Submit
            </Button>
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
ConfirmForm.propsTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConfirmForm);
