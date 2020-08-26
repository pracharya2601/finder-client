import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

const Map = () => {
  return (
    <GoogleMap
      defaultZoom={5}
      defaultCenter={{ lat: 27.717245, lng: 85.323959 }}
    />
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
