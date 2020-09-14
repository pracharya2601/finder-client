import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fade, makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';

import ResponsiveDrawer from './navItems/ResponsiveDrawer';
import Notifications from './navItems/Notifications';
import AddItem from './items/AddItem';

//material ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  accountBtn: {
    marginTop: theme.spacing(1),
    cursor: 'pointer',
  },
  title: {
    display: 'block', //change to nonde if search is added
    color: 'white',
    marginLeft: '3px',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(1),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const {
    user: { authenticated, notifications, credentials },
    loading,
  } = props;

  return (
    <AppBar>
      <Toolbar>
        <ResponsiveDrawer />
        <Typography
          component={Link}
          to="/"
          className={classes.title}
          variant="h6"
          noWrap
        >
          Easypezy
        </Typography>
        {/* <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div> */}

        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          {authenticated && <Notifications notifications={notifications} />}
          {authenticated && <AddItem icon />}
          {!authenticated && (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
          {!authenticated && (
            <Button color="inherit" component={Link} to="/signup">
              Signup
            </Button>
          )}
          {/* <IconButton aria-label="show 4 new mails" color="inherit">
            <AddIcon />
          </IconButton> */}
          {authenticated && (
            <Chip
              className={classes.accountBtn}
              avatar={<Avatar alt="Natacha" src={credentials.imageUrl} />}
              label={credentials.fullName}
              component={Link}
              to="/user/profile"
            />
          )}
        </div>
        <div className={classes.sectionMobile}>
          {authenticated && <Notifications notifications={notifications} />}
          {authenticated && <AddItem icon />}
          {!authenticated && (
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          )}
          {!authenticated && (
            <Button color="inherit" component={Link} to="/signup">
              Signup
            </Button>
          )}
        </div>
      </Toolbar>
      {loading && <LinearProgress color="secondary" />}
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  authenticated: state.user.authenticated,
  user: state.user,
});

export default connect(mapStateToProps)(NavBar);
