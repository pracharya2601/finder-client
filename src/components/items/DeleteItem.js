import React from 'react';
import Modal from '../modal/Modal';

import { connect } from 'react-redux';
import { deleteItem } from '../../redux/actions/dataAction';

const Dummys = (props) => {
  const deleteItem = () => {
    props.deleteItem(props.itemId);
  };
  return <Modal {...props} onClick={deleteItem} submit cancel />;
};

export default connect(null, { deleteItem })(Dummys);
