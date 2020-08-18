import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import ResponsiveDrawer from './navItems/ResponsiveDrawer';
import Notifications from './navItems/Notifications';

//css import
import './css/Navbar.css';

//material ui
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import Tooltip from '@material-ui/core/Tooltip';
import LinearProgress from '@material-ui/core/LinearProgress';

class Navbar extends React.Component {
  render() {
    const {
      user: { authenticated, notifications },
      loading,
    } = this.props;
    return (
      <AppBar>
        <ToolBar className="nav-container">
          <div className="navbar-items">
            <ResponsiveDrawer />
            <Tooltip title="Home">
              <Button
                color="inherit"
                // startIcon={<HomeIcon />}
                component={Link}
                to="/"
              >
                EasyPezy
              </Button>
            </Tooltip>
          </div>
          {authenticated ? (
            <div className="navbar-items">
              <Tooltip title="Post a place">
                <Button
                  color="inherit"
                  component={Link}
                  to="/place/newpost/place"
                >
                  <AddIcon />
                </Button>
              </Tooltip>
              <Notifications notifications={notifications} />
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
        {loading && <LinearProgress color="secondary" />}
      </AppBar>
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

export default connect(mapStateToProps)(Navbar);
