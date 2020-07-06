import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPlaces, clearErrors } from '../redux/actions/dataAction';
import Loading from './loading/Loading';
import Place from './places/Place';

class Saved extends React.Component {
  componentDidMount() {
    this.props.getPlaces();
  }

  render() {
    const {
      data: { places },
      user: { saved, authenticated },
    } = this.props;
    console.log(this.props);

    const filtered = Object.keys(places)
      .filter((key) => Object.keys(_.mapKeys(saved, 'placeId')).includes(key))
      .reduce((obj, key) => {
        obj[key] = places[key];
        return obj;
      }, {});
    // (_.isEmpty(filtered))

    const savedMarkup = _.isEmpty(filtered) ? (
      <div>You dont have any saved Item</div>
    ) : (
      _.map(filtered, (place) => {
        return <Place place={place} key={place.placeId} />;
      })
    );

    return (
      <div className="place_container">
        {authenticated && <>{savedMarkup}</>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  user: state.user,
});

export default connect(mapStateToProps, { getPlaces, clearErrors })(Saved);
