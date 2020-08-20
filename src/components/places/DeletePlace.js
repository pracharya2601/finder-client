import React from 'react';
import Modal from '../modal/Modal';

import { connect } from 'react-redux';
import { deletePlace } from '../../redux/actions/dataAction';

const Dummys = (props) => {
  const deletePlace = () => {
    props.deletePlace(props.placeId);
  };
  return <Modal {...props} onClick={deletePlace} submit cancel />;
};

export default connect(null, { deletePlace })(Dummys);
