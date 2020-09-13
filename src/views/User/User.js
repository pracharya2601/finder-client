import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import _ from 'lodash';

//import title
import withTitle from '../../util/withTitle';

//navbar
import Navbar from '../../components/Navbar';

//footer
import Footer from '../../components/footer/Footer';

import Container from '../../components/container/Container';
import Item from '../../components/items/Item';
import Fullname from '../../components/profile/Fullname';
import CreatedAt from '../../components/profile/CreatedAt';
import EditDetail from '../../components/profile/EditDetail';
import DetailContent from '../../components/profile/DetailContent';
import Loading from '../../components/loading/Loading';
import TabPanel from '../../components/tabs/TabPanel';

//mui

import withStyles from '@material-ui/core/styles/withStyles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Tooltip from '@material-ui/core/Tooltip';
import Avatar from '@material-ui/core/Avatar';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

//icon
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

//redux
import { connect } from 'react-redux';
import { getUserDetail } from '../../redux/actions/dataAction';

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

class User extends React.Component {
  state = {
    value: 1,
  };

  componentDidMount() {
    const handle = this.props.match.params.handle;
    this.props.getUserDetail(handle);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.handle !== this.props.match.params.handle) {
      const handle = nextProps.match.params.handle;
      this.props.getUserDetail(handle);
    }
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
      classes,
      userPage,
      profilePage,
      user: { credentials, loading, authenticated },
      userDetail: { user, availableItem, unavailableItem },
    } = this.props;
    console.log(credentials);
    console.log(user);

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

    const profileMarkup = !loading ? (
      <Card className={classes.card}>
        {user && credentials && (
          <CardContent className={classes.cardHeader}>
            <Avatar
              alt={user.handle}
              src={user.imageUrl}
              className={classes.imageProfile}
            />
            <Fullname fullName={user.fullName} />
            <div className={classes.userItem}>{user.bio}</div>
            <CreatedAt createdAt={credentials.createdAt} />
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
          <Container direction="right">
            <Grid container spacing={2}>
              {availableItems}
            </Grid>
          </Container>
        </TabPanel>
      </div>
    );

    return (
      <>
        <Navbar />
        <Container direction="right">
          <div className={classes.profileCard}>{profileMarkup}</div>
          <div className={classes.itemCard}>{tabMarkup}</div>
        </Container>
        <Footer />
      </>
    );
    // return <Container>Hello</Container>;
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  userDetail: state.data.userDetail,
});

const title = 'user';

export default connect(mapStateToProps, { getUserDetail })(
  withStyles(styles)(withTitle(User, title))
);
