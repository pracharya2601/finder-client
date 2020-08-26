import React from 'react';
import uniqid from 'uniqid';

//title
import withTitle from '../../util/withTitle';

import { connect } from 'react-redux';
import { postItem } from '../../redux/actions/dataAction';

//import itemform
import ItemForm from '../../components/itemForm/ItemForm';

class PostNewItem extends React.Component {
  onSubmit = (values) => {
    this.props.postItem(values, () => {
      this.props.history.push('/all');
    });
  };

  render() {
    let id = uniqid('item-') + uniqid();
    return (
      <>
        <ItemForm
          onSubmit={this.onSubmit}
          header="Post New Stuff"
          id={id}
          loading={this.props.loading}
          resetBtn
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.UI.loading,
});

const title = 'Post New Item EasyPezy';

export default connect(mapStateToProps, { postItem })(
  withTitle(PostNewItem, title)
);
