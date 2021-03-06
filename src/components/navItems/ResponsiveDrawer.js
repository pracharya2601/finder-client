import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/userAction';

import AddItem from '../items/AddItem';

import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsPowerIcon from '@material-ui/icons/SettingsPower';
import ContactsIcon from '@material-ui/icons/Contacts';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SaveIcon from '@material-ui/icons/Save';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import CategoryIcon from '@material-ui/icons/Category';
import AddIcon from '@material-ui/icons/Add';
// import clsx from 'clsx';

const styles = {
  list: {
    width: 250,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  fullList: {
    width: 'auto',
  },
  drawer: {
    background: 'rgba(245, 245, 245);',
    height: '100%',
  },
};

class ResponsiveDrawer extends React.Component {
  state = {
    anchor: false,
  };

  toggleDrawerClick = () => {
    this.setState({ anchor: true });
  };
  toggleDrawerClickClose = () => {
    this.setState({ anchor: false });
  };
  handleLogout = () => {
    this.props.logoutUser();
  };

  render() {
    const {
      classes,
      user: { authenticated, credentials },
    } = this.props;

    const signedInList = (
      <div>
        <Divider />
        <List>
          {credentials && (
            <ListItem button component={Link} to={`/user/profile/`}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText>Profile</ListItemText>
            </ListItem>
          )}
        </List>
        <List>
          <ListItem
            button
            onClick={this.handleLogout}
            component={Link}
            to={`/login`}
          >
            <ListItemIcon>
              <ExitToAppIcon style={{ color: 'red' }} />
            </ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </ListItem>
        </List>
      </div>
    );

    const noSignedList = (
      <div>
        <Divider />
        <List>
          <ListItem button component={Link} to={`/login`}>
            <ListItemIcon>
              <VpnKeyIcon />
            </ListItemIcon>
            <ListItemText>Login</ListItemText>
          </ListItem>
        </List>
        <List>
          <ListItem button component={Link} to={`/signup`}>
            <ListItemIcon>
              <ContactsIcon />
            </ListItemIcon>
            <ListItemText>Signup</ListItemText>
          </ListItem>
        </List>
      </div>
    );

    const savedMarkup = (
      <>
        <List>
          <ListItem button component={Link} to={`/user/saved`}>
            <ListItemIcon>
              <SaveIcon />
            </ListItemIcon>
            <ListItemText>Saved</ListItemText>
          </ListItem>
        </List>
      </>
    );
    // const aboutMarkup = (
    //   <List>
    //     <ListItem button component={Link} to={`/user/saved`}>
    //       <ListItemIcon>
    //         <SaveIcon />
    //       </ListItemIcon>
    //       <ListItemText>Saved</ListItemText>
    //     </ListItem>
    //   </List>
    // );

    const list = (anchor) => (
      <div className={classes.drawer}>
        <div
          role="presentation"
          className={classes.list}
          onClick={this.toggleDrawerClickClose}
        >
          <div>
            <List>
              <ListItem button component={Link} to="/">
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
              </ListItem>
            </List>
            <List>
              <ListItem button component={Link} to="/sale">
                <ListItemIcon>
                  <LoyaltyIcon />
                </ListItemIcon>
                <ListItemText>For Sale</ListItemText>
              </ListItem>
            </List>
            <List>
              <ListItem button component={Link} to="/rental">
                <ListItemIcon>
                  <RecentActorsIcon />
                </ListItemIcon>
                <ListItemText>Rental</ListItemText>
              </ListItem>
            </List>
            <List>
              <ListItem button component={Link} to="/other">
                <ListItemIcon>
                  <CategoryIcon />
                </ListItemIcon>
                <ListItemText>Other</ListItemText>
              </ListItem>
            </List>
            {authenticated ? savedMarkup : null}
          </div>
          <div>{authenticated ? signedInList : noSignedList}</div>
        </div>
      </div>
    );
    const side = ['left'];

    return (
      <div>
        {side.map((anchor) => (
          <React.Fragment key={anchor}>
            <MenuIcon
              onClick={this.toggleDrawerClick}
              className={classes.menuButton}
              fontSize="large"
            />
            <Drawer
              anchor={anchor}
              open={this.state.anchor}
              onClose={this.toggleDrawerClickClose}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    );
  }
}

ResponsiveDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { logoutUser })(
  withStyles(styles)(ResponsiveDrawer)
);
