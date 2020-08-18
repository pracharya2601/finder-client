import React from 'react';

import { storage } from '../../base';
import uniqid from 'uniqid';

import { connect } from 'react-redux';
import { postPlace } from '../../redux/actions/dataAction';

//import placeform
import PlaceForm from '../../components/placeForm/PlaceForm';

class PostNewPlace extends React.Component {
  onSubmit = (values) => {
    this.props.postPlace(values, () => {
      this.props.history.push('/all');
    });
  };

  render() {
    let id = uniqid('place-') + uniqid();
    return (
      <>
        <PlaceForm
          onSubmit={this.onSubmit}
          header="Post New Stuff"
          id={id}
          resetBtn
        />
      </>
    );
  }
}

export default connect(null, { postPlace })(PostNewPlace);
