import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import _ from 'lodash';

//import title
import withTitle from '../../util/withTitle';

import StaticProfile from '../../components/profile/StaticProfile';
import Page from '../../components/page/Page';
import Container from '../../components/container/Container';

//mui
import withStyles from '@material-ui/core/styles/withStyles';
import LinearProgress from '@material-ui/core/LinearProgress';

//redux
import { connect } from 'react-redux';
import { fetchUserData } from '../../redux/actions/dataAction';

const styles = {
  profileCard: {
    display: 'flex',
    justifyContent: 'center',
  },
  // placeCard: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   justifyContent: 'space-around',
  // },
};

class User extends React.Component {
  state = {
    profile: null,
  };
  componentDidMount() {
    const handle = this.props.match.params.handle;

    this.props.fetchUserData(handle);
    axios
      .get(`/user/${handle}`)
      .then((res) => {
        this.setState({
          profile: res.data.user,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { classes, credentials } = this.props;
    const { places, loading } = this.props.data;

    const placeMarkup = loading ? (
      <>
        <LinearProgress color="primary" />
      </>
    ) : places === null ? null : (
      <Page loading={loading} items={places} pageName="Other Catagory Items" />
    );

    return (
      <Container direction="right">
        <div className={classes.profileCard}>
          <StaticProfile
            profile={this.state.profile}
            credentials={credentials}
          />
        </div>
        <div className={classes.placeCard}>{placeMarkup}</div>
      </Container>
    );
  }
}

User.propTypes = {
  fetchUserData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  data: state.data,
  credentials: state.user.credentials,
});

const title = 'User Detail';

export default connect(mapStateToProps, { fetchUserData })(
  withStyles(styles)(withTitle(User, title))
);
