import React from 'react';
import axios from 'axios';
import './css/Home.css';

import Loading from './loading/Loading';

import Place from './places/Place.js';

class Home extends React.Component {
  state = {
    places: null,
  };
  componentDidMount() {
    axios
      .get('https://us-central1-cocoontechlab.cloudfunctions.net/api/places')
      .then((res) => {
        this.setState({
          places: res.data,
        });
      });
  }

  render() {
    let recentPlace = this.state.places ? (
      this.state.places.map((place) => (
        <Place place={place} key={place.placeId} />
      ))
    ) : (
      <Loading />
    );
    return <div className="place_container">{recentPlace}</div>;
  }
}

export default Home;
