import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Place from './places/Place';
import StaticProfile from './profile/StaticProfile';
import Loading from './loading/Loading';
//mui
import withStyles from '@material-ui/core/styles/withStyles';

//redux
import { connect } from 'react-redux';
import { fetchUserData } from '../redux/actions/dataAction';

const styles = {
  profileCard: {
    display: 'flex',
    justifyContent: 'center',
  },
  placeCard: {
    display: 'flex',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
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
      <Loading />
    ) : places === null ? null : (
      places.map((place) => <Place key={place.placeId} place={place} />)
    );

    return (
      <>
        <div className={classes.profileCard}>
          <StaticProfile
            profile={this.state.profile}
            credentials={credentials}
          />
        </div>
        <div className={classes.placeCard}>{placeMarkup}</div>
      </>
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

export default connect(mapStateToProps, { fetchUserData })(
  withStyles(styles)(User)
);
