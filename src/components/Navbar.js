import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import ResponsiveDrawer from './navItems/ResponsiveDrawer';

//css import
import './css/Navbar.css';

//material ui
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import Notifications from '@material-ui/icons/Notifications';
import Tooltip from '@material-ui/core/Tooltip';

class Navbar extends React.Component {
  render() {
    const { authenticated } = this.props;
    return (
      <AppBar>
        <ToolBar className="nav-container">
          <div className="navbar-items">
            <ResponsiveDrawer />
            <Tooltip title="Home">
              <Button color="inherit" component={Link} to="/">
                <HomeIcon />
              </Button>
            </Tooltip>
          </div>
          {authenticated ? (
            <div className="navbar-items">
              <Tooltip title="add place">
                <Button color="inherit" component={Link} to="/place/new">
                  <AddIcon />
                </Button>
              </Tooltip>
              <Tooltip title="Notification">
                <Button color="inherit">
                  <Notifications />
                </Button>
              </Tooltip>
            </div>
          ) : (
            <div className="navbar-items">
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Signup
              </Button>
            </div>
          )}
        </ToolBar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(Navbar);
