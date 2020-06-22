import React from 'react';
import { Link } from 'react-router-dom';

import MenuIcon from './navItems/MenuIcon';

//css import
import './css/Navbar.css';

//material ui
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

class Navbar extends React.Component {
  render() {
    return (
      <AppBar>
        <ToolBar className="nav-container">
          <div className="navbar-items">
            <MenuIcon />
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
          </div>
          <div className="navbar-items">
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Signup
            </Button>
          </div>
        </ToolBar>
      </AppBar>
    );
  }
}

export default Navbar;
