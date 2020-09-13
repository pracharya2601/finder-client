import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import TabPanel from '../tabs/TabPanel';

//title
import withTitle from '../../util/withTitle';
//navbar
import Navbar from '../Navbar';

import Container from '../container/Container';
import TabComp from '../tabs/TabComp';

//redux
import { connect } from 'react-redux';
import { logoutUser, uploadImage } from '../../redux/actions/userAction';

//component
import EditDetail from './EditDetail';
import Fullname from './Fullname';
import CreatedAt from './CreatedAt';
import DetailContent from './DetailContent';

//loding page
import Loading from '../loading/Loading';

//MUI
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
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
  imageProfile: {
    height: '150px',
    width: '150px',
    objectFit: 'cover',
    marginBottom: '20px',
  },
  userItem: {
    display: 'flex',
    alignItems: 'center',
    margin: '5px 0 5px 0',
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
      user: {
        credentials,
        loading,
        authenticated,
        availableItem,
        unavailableItem,
        saved,
      },
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
            <Fullname
              fullName={credentials.fullName}
              handle={credentials.handle}
            />
            {credentials.bio && (
              <div className={classes.userItem}>{credentials.bio}</div>
            )}
            <CreatedAt createdAt={credentials.createdAt} />
            <div className={classes.userItem}>
              <EditDetail />
            </div>
          </CardContent>
          <Divider light />
          <DetailContent
            location={credentials.location}
            contactNo={credentials.contactNo}
            email={credentials.email}
            website={credentials.website}
          />
          <CardContent className={classes.cardHeader}>
            <Tooltip title="Logout" placement="top">
              <IconButton
                onClick={this.handleLogout}
                component={Link}
                to={`/login`}
              >
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

    return (
      <>
        <Navbar />
        <Container direction="right">
          <div className={classes.profileCard}>{profileMarkup}</div>
          <TabComp
            availableItem={availableItem}
            unavailableItem={unavailableItem}
            savedItem={saved}
          />
        </Container>
      </>
    );
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

const title = 'user';

export default connect(mapStateToProps, { logoutUser, uploadImage })(
  withStyles(styles)(withTitle(Profile, title))
);
