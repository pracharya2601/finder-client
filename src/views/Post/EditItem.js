import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getItem, updateItem } from '../../redux/actions/dataAction';

import ItemForm from '../../components/itemForm/ItemForm';
import Container from '../../components/container/Container';

//title
import withTitle from '../../util/withTitle';

class EditItem extends React.Component {
  componentWillMount() {
    this.props.getItem(this.props.match.params.itemId);
  }
  onSubmit = (values) => {
    this.props.updateItem(this.props.match.params.itemId, values, () => {
      this.props.history.push(`/item/${this.props.match.params.itemId}`);
    });
  };
  render() {
    if (!this.props.item) {
      return <div>Loading</div>;
    }
    return (
      <Container direction="left">
        <ItemForm
          initialValues={_.pick(
            this.props.item,
            'name',
            'description',
            'catagory',
            'priceRange',
            'address',
            'contactNo',
            'nearbyItem',
            'selectApply'
          )}
          onSubmit={this.onSubmit}
          id={this.props.item.itemId}
          header="Edit Item Info"
          loading={this.props.loading}
          addImg
        />
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  loading: state.UI.loading,
  item: state.data.item,
});

const title = 'edit';

export default connect(mapStateToProps, { getItem, updateItem })(
  withTitle(EditItem, title)
);
