import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import ResponsiveDrawer from './navItems/ResponsiveDrawer';
import Notifications from './navItems/Notifications';

//material ui
import withStyles from '@material-ui/core/styles/withStyles';
import Slide from '@material-ui/core/Slide';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import Tooltip from '@material-ui/core/Tooltip';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = {
  navItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

class Navbar extends React.Component {
  render() {
    const {
      classes,
      user: { authenticated, notifications },
      loading,
    } = this.props;
    return (
      <Slide direction="down" in={true} mountOnEnter unmountOnExit>
        <AppBar>
          {loading && <LinearProgress color="primary" />}
          <ToolBar className={classes.navItem}>
            <div className={classes.navItem}>
              <ResponsiveDrawer />
              <Tooltip title="Home">
                <Button color="inherit" component={Link} to="/">
                  EasyPezy
                </Button>
              </Tooltip>
            </div>
            {authenticated ? (
              <div className={classes.navItem}>
                <Tooltip title="Post a item">
                  <Button
                    color="inherit"
                    component={Link}
                    to="/item/newpost/item"
                  >
                    <AddIcon />
                  </Button>
                </Tooltip>
                <Notifications notifications={notifications} />
              </div>
            ) : (
              <div className={classes.navItem}>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
                <Button color="inherit" component={Link} to="/signup">
                  Signup
                </Button>
              </div>
            )}
          </ToolBar>
          {loading && <LinearProgress color="secondary" />}
        </AppBar>
      </Slide>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  authenticated: state.user.authenticated,
  user: state.user,
});

export default connect(mapStateToProps)(withStyles(styles)(Navbar));
