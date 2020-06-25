import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import EditDetail from './EditDetail';

import { connect } from 'react-redux';
import { logoutUser, uploadImage } from '../../redux/actions/userAction';

import dayjs from 'dayjs';

//loding page
import Loading from '../loading/Loading';

//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import MuiLink from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import MailIcon from '@material-ui/icons/Mail';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import LinkIcon from '@material-ui/icons/Link';
import PhoneIcon from '@material-ui/icons/Phone';
import Tooltip from '@material-ui/core/Tooltip';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';

//MUI icons
const styles = {
  profileCard: {
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    minWidth: '345px',
    width: '100%',
    maxWidth: '800px',
    marginBottom: 20,
    alignItem: 'center',
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  userShow: {
    height: '30px',
    display: 'flex',
    lineHeight: '30px',
  },
  imageProfile: {
    height: '150px',
    width: '150px',
    objectFit: 'cover',
    marginBottom: '20px',
  },
  content: {
    margin: '10px 15% 0 15%',
    display: 'flex',
    flexDirection: 'column',
  },
  userItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '5px 0 5px 0',
  },
  linkItem: {
    width: '70%',
    marginRight: '30px',
    overfolw: 'hidden',
  },
};

class Profile extends Component {
  handleImageChange = (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append('image', image, image.name);
    this.props.uploadImage(formData);
  };
  handleEditPicture = () => {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
  };

  handleLogout = () => {
    this.props.logoutUser();
  };

  render() {
    const {
      classes,
      user: { credentials, loading, authenticated },
    } = this.props;

    const profileMarkup = !loading ? (
      authenticated ? (
        <Card className={classes.card}>
          <CardContent className={classes.cardHeader}>
            <Tooltip title="Edit profile picture">
              <Avatar
                alt={credentials.handle}
                src={credentials.imageUrl}
                className={classes.imageProfile}
                onClick={this.handleEditPicture}
              />
            </Tooltip>
            <input
              type="file"
              id="imageInput"
              hidden="hidden"
              onChange={this.handleImageChange}
            />

            <MuiLink
              variant="h5"
              color="primary"
              component={Link}
              to={`/user/${credentials.handle}`}
            >
              {credentials.fullName}
            </MuiLink>
            {credentials.bio && (
              <div className={classes.userItem}>{credentials.bio}</div>
            )}
            <div className={classes.userItem}>
              <CalendarTodayIcon color="primary" />
              {''}
              <span>
                Joined {dayjs(credentials.createdAt).format('MMM YYYY')}
              </span>
            </div>
            <div className={classes.userItem}>
              <EditDetail />
            </div>
          </CardContent>
          <Divider light />
          <CardContent className={classes.content}>
            {credentials.location && (
              <div className={classes.userItem}>
                <MyLocationIcon />
                <span>{credentials.location}</span>
              </div>
            )}
            <div className={classes.userItem}>
              <PhoneIcon />
              <span>{credentials.contactNo}</span>
            </div>
            <div className={classes.userItem}>
              <MailIcon />
              <span>{credentials.email}</span>
            </div>
            {credentials.website && (
              <a
                className={classes.userItem}
                href={credentials.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon />
                <span className={classes.userItem}>{credentials.website}</span>
              </a>
            )}
          </CardContent>
          <CardContent className={classes.cardHeader}>
            <Tooltip title="Logout" placement="top">
              <IconButton onClick={this.handleLogout}>
                <ExitToAppIcon style={{ color: 'red' }} />
              </IconButton>
            </Tooltip>
          </CardContent>
        </Card>
      ) : (
        <p className={classes.hello} component={Link} to="/login">
          Please login
        </p>
      )
    ) : (
      <Loading />
    );

    return <div className={classes.profileCard}>{profileMarkup}</div>;
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { logoutUser, uploadImage })(
  withStyles(styles)(Profile)
);
