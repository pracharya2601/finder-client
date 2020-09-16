import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getItem, updateItem } from '../../redux/actions/dataAction';

import ItemForms from '../../components/itemForm/itemForms';
import Container from '../../components/container/Container';

//title
import withTitle from '../../util/withTitle';

//navbar
import Navbar from '../../components/Navbar';

class EditItem extends React.Component {
  componentDidMount() {
    this.props.getItem(this.props.match.params.itemId);
  }
  componentWillMount() {
    this.props.getItem(this.props.match.params.itemId);
  }
  onSubmit = (values) => {
    this.props.updateItem(this.props.match.params.itemId, values, () => {
      this.props.history.push('/all');
    });
  };
  render() {
    console.log(this.props.item);
    if (!this.props.item) {
      return <div>Loading</div>;
    }
    return (
      <>
        <Navbar />
        <Container direction="left">
          <ItemForms
            initialValues={_.pick(
              this.props.item,
              'type',
              'name',
              'description',
              'pointDescription',
              'realstate',
              'priceRange',
              'address',
              'contactNo',
              'nearbyPlace',
              'selectApply',
              'hasPrice',
              'negotiable',
              'showNum'
            )}
            catagory={this.props.match.params.catagory}
            onSubmit={this.onSubmit}
            id={this.props.item.itemId}
            header="Edit Item Info"
            loading={this.props.loading}
            addImg
          />
        </Container>
      </>
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
