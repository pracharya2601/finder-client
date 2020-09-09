import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import _ from 'lodash';

//title
import withTitle from '../../util/withTitle';
import Container from '../container/Container';

//redux
import { connect } from 'react-redux';
import { logoutUser, uploadImage } from '../../redux/actions/userAction';

//component
import EditDetail from './EditDetail';
import Fullname from './Fullname';
import CreatedAt from './CreatedAt';
import DetailContent from './DetailContent';
import TabPanel from '../tabs/TabPanel';
import Item from '../items/Item';

//loding page
import Loading from '../loading/Loading';

//MUI
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';

import { fetchUserData } from '../../redux/actions/dataAction';

//MUI icons
const styles = {
  profileCard: {
    display: 'flex',
    justifyContent: 'center',
  },
  itemCard: {
    boxSizing: 'border-box',
    width: '100%',
    padding: '0 20px 0 20px',
    backgroundColor: 'white',
    borderRadius: '5px',
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

const a11yProps = (index) => {
  return {
    id: index,
    'arial-control': index,
  };
};

class ProfileCard extends Component {
  state = {
    value: 1,
  };
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    const handle = this.props.handle;
    this.props.getUserDetail(handle);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

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

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    const {
      userPage,
      profilePage,
      classes,
      user: { credentials, loading, authenticated },
      userDetail: { user, availableItem, unavailableItem },
    } = this.props;
    console.log(this.props);

    const itemMarkupFunc = (items) => {
      return items.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.itemId}>
          <Item item={item} />
        </Grid>
      ));
    };

    const availableItems = availableItem ? itemMarkupFunc(availableItem) : null;
    const unavailableItems = unavailableItem
      ? itemMarkupFunc(unavailableItem)
      : null;

    const title = userPage ? '' : 'Edit profile Picture';

    const profileMarkup = !loading ? (
      <Card className={classes.card}>
        {user && (
          <CardContent className={classes.cardHeader}>
            <Tooltip title={title}>
              <Avatar
                alt={user.handle}
                src={user.imageUrl}
                className={classes.imageProfile}
                onClick={userPage ? null : this.handleEditPicture}
              />
            </Tooltip>
            <input
              type="file"
              id="imageInput"
              hidden="hidden"
              onChange={this.handleImageChange}
            />
            <Fullname fullName={user.fullName} />
            <div className={classes.userItem}>{user.bio}</div>
            <CreatedAt createdAt={credentials.createdAt} />
            {profilePage && (
              <div className={classes.userItem}>
                <EditDetail />
              </div>
            )}
          </CardContent>
        )}
        <Divider light />
        {user && authenticated && (
          <DetailContent
            location={user.location}
            contactNo={user.contactNo}
            email={user.email}
            website={user.website}
          />
        )}
        {authenticated && (
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
        )}
      </Card>
    ) : (
      <Loading />
    );

    const tabMarkup = (
      <div style={{ position: 'sticky', top: 10 }}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Past Post" {...a11yProps(0)} />
          <Tab label="Available Post" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={this.state.value} index={0}>
          <Container>
            <Grid container spacing={2}>
              {unavailableItems}
            </Grid>
          </Container>
        </TabPanel>
        <TabPanel value={this.state.value} index={1}>
          <Container>
            <Grid container spacing={2}>
              {availableItems}
            </Grid>
          </Container>
        </TabPanel>
      </div>
    );

    return (
      <Container direction="right">
        <div className={classes.profileCard}>{profileMarkup}</div>
        <div className={classes.itemCard}>{tabMarkup}</div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  userDetail: state.data.userDetail,
});

const title = 'user';

export default connect(mapStateToProps, {
  logoutUser,
  uploadImage,
  getUserDetail,
})(withStyles(styles)(withTitle(ProfileCard, title)));
