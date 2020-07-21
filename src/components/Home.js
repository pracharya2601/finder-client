import React from 'react';
import PropTypes from 'prop-types';
import './css/Home.css';

import _ from 'lodash';

import Skeleton from './loading/Skeleton';
import Place from './places/Place.js';

import { connect } from 'react-redux';
import { getPlaces } from '../redux/actions/dataAction';

class Home extends React.Component {
  componentDidMount() {
    this.props.getPlaces();
  }
  render() {
    const { places, loading } = this.props.data;

    let recentPlace = !loading ? (
      _.map(places, (place) => {
        return (
          <>
            <Place place={place} key={place.placeId} />
          </>
        );
      })
    ) : (
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    );
    return <div className="place_container">{recentPlace}</div>;
  }
}

Home.propTypes = {
  getPlaces: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, { getPlaces })(Home);
