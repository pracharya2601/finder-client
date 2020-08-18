import React from 'react';
import PropTypes from 'prop-types';
import '../../components/css/Home.css';
import _ from 'lodash';

import Skeleton from '../../components/loading/Skeleton';
import Place from '../../components/places/Place';

import ItemCarousel from '../../components/carousel/ItemCarousel';
import CarouselHeader from '../../components/carousel/CarouselHeader';

//material ui
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import {
  getPlaces,
  getOtherPlace,
  getSalePlace,
  getRentalPlace,
} from '../../redux/actions/dataAction';

class Home extends React.Component {
  componentDidMount() {
    this.props.getPlaces();
    this.props.getOtherPlace();
    this.props.getSalePlace();
    this.props.getRentalPlace();
  }

  render() {
    const {
      allPlaces,
      rentalPlaces,
      salePlaces,
      otherPlaces,
      loading,
    } = this.props;

    const skeleton = (
      <div style={{ display: 'flex' }}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );

    let allPlacesMarkup = loading
      ? skeleton
      : _.map(allPlaces, (place) => {
          return <Place place={place} key={place.placeId} />;
        });
    let rentalPlacesMarkup = loading
      ? skeleton
      : _.map(rentalPlaces, (place) => {
          return <Place place={place} key={place.placeId} />;
        });
    let salePlaceMarkup = loading
      ? skeleton
      : _.map(salePlaces, (place) => {
          return <Place place={place} key={place.placeId} />;
        });
    let otherPlacesMarkup = loading
      ? skeleton
      : _.map(otherPlaces, (place) => {
          return <Place place={place} key={place.placeId} margin />;
        });

    return (
      <>
        <div style={style}>
          {!loading && (
            <CarouselHeader
              heading="Recent Places"
              goTo="/all"
              goToText="See All"
            />
          )}
          <ItemCarousel>{allPlacesMarkup}</ItemCarousel>
        </div>
        <div style={style}>
          {!loading && (
            <CarouselHeader
              heading="Rental Places"
              goTo="/rental"
              goToText="See All"
            />
          )}
          <ItemCarousel>{rentalPlacesMarkup}</ItemCarousel>
        </div>
        <div style={style}>
          {!loading && (
            <CarouselHeader
              heading="Sale Places"
              goTo="/sale"
              goToText="See All"
            />
          )}
          <ItemCarousel>{salePlaceMarkup}</ItemCarousel>
        </div>
        <div style={style}>
          {!loading && (
            <CarouselHeader
              heading="Other Catagory Item"
              goTo="/other"
              goToText="See All"
            />
          )}
          <ItemCarousel>{otherPlacesMarkup}</ItemCarousel>
        </div>
      </>
    );
  }
}

const style = {
  boxSizing: 'border-box',
  padding: '0 0 3% 0',
  borderBottom: '3px solid lightgrey',
};

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  allPlaces: state.data.places,
  rentalPlaces: state.data.rentalPlaces,
  salePlaces: state.data.salePlaces,
  otherPlaces: state.data.otherPlaces,
});

export default connect(mapStateToProps, {
  getPlaces,
  getOtherPlace,
  getSalePlace,
  getRentalPlace,
})(Home);
