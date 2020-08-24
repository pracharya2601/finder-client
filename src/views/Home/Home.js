import React from 'react';
import _ from 'lodash';

import Skeleton from '../../components/loading/Skeleton';
import Place from '../../components/places/Place';

import ItemCarousel from '../../components/carousel/ItemCarousel';
import CarouselHeader from '../../components/carousel/CarouselHeader';

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
    let num = 5;

    const skeleton = (
      <div style={{ display: 'flex', overFlow: 'hide' }}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );

    const slicedItem = (myObject) => {
      const sliced = Object.keys(myObject)
        .slice(0, 10)
        .reduce((result, key) => {
          result[key] = myObject[key];

          return result;
        }, {});
      return sliced;
    };

    let allPlacesMarkup = loading
      ? skeleton
      : _.map(slicedItem(allPlaces), (place) => {
          return <Place place={place} key={place.placeId} />;
        });
    let rentalPlacesMarkup = loading
      ? skeleton
      : _.map(slicedItem(rentalPlaces), (place) => {
          return <Place place={place} key={place.placeId} />;
        });
    let salePlaceMarkup = loading
      ? skeleton
      : _.map(slicedItem(salePlaces), (place) => {
          return <Place place={place} key={place.placeId} />;
        });
    let otherPlacesMarkup = loading
      ? skeleton
      : _.map(slicedItem(otherPlaces), (place) => {
          return <Place place={place} key={place.placeId} margin />;
        });

    return (
      <>
        <div style={style}>
          {allPlaces && (
            <CarouselHeader
              heading="Recent Places"
              goTo="/all"
              goToText="See All"
            />
          )}
          <ItemCarousel>{allPlacesMarkup}</ItemCarousel>
        </div>
        <div style={style}>
          {rentalPlaces && (
            <CarouselHeader
              heading="Rental Places"
              goTo="/rental"
              goToText="See All"
            />
          )}
          <ItemCarousel>{rentalPlacesMarkup}</ItemCarousel>
        </div>
        <div style={style}>
          {salePlaces && (
            <CarouselHeader
              heading="Sale Places"
              goTo="/sale"
              goToText="See All"
            />
          )}
          <ItemCarousel>{salePlaceMarkup}</ItemCarousel>
        </div>
        <div style={style}>
          {otherPlaces && (
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
