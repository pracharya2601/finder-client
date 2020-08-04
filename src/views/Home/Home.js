import React from 'react';
import PropTypes from 'prop-types';
import '../../components/css/Home.css';

import _ from 'lodash';

import Skeleton from '../../components/loading/Skeleton';
import Place from '../../components/places/Place';
import Filter from '../../components/places/Filter';

import { connect } from 'react-redux';
import { getPlaces } from '../../redux/actions/dataAction';

class Home extends React.Component {
  componentDidMount() {
    this.props.getPlaces();
  }
  render() {
    const { data, loading } = this.props;

    let recentPlace = !loading ? (
      _.map(data, (place) => {
        return <Place place={place} key={place.placeId} />;
      })
    ) : (
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    );
    return (
      <>
        <Filter />
        <div className="place_container">{recentPlace}</div>
      </>
    );
  }
}

Home.propTypes = {
  getPlaces: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  data: state.data.filteredPlaces,
});

export default connect(mapStateToProps, { getPlaces })(Home);
