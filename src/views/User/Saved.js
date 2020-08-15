import React from 'react';
import _ from 'lodash';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPlaces, clearErrors } from '../../redux/actions/dataAction';
import Page from '../../components/page/Page';

class Saved extends React.Component {
  componentDidMount() {
    this.props.getPlaces();
  }

  render() {
    const {
      data: { places },
      user: { saved, authenticated },
    } = this.props;

    const filtered = Object.keys(places)
      .filter((key) => Object.keys(_.mapKeys(saved, 'placeId')).includes(key))
      .reduce((obj, key) => {
        obj[key] = places[key];
        return obj;
      }, {});

    const savedMarkup = _.isEmpty(filtered) ? (
      <div>You dont have any saved Item</div>
    ) : (
      <Page items={filtered} pageName="My Saved Items" />
    );
    return <>{authenticated && <>{savedMarkup}</>}</>;
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
  user: state.user,
});

export default connect(mapStateToProps, { getPlaces, clearErrors })(Saved);
