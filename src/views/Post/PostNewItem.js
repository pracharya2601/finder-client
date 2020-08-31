import React from 'react';
import uniqid from 'uniqid';

//title
import withTitle from '../../util/withTitle';

import { connect } from 'react-redux';
import { postItem } from '../../redux/actions/dataAction';

//import itemform
import ItemForm from '../../components/itemForm/ItemForm';
import Container from '../../components/container/Container';

class PostNewItem extends React.Component {
  onSubmit = (values) => {
    this.props.postItem(values, () => {
      this.props.history.push('/all');
    });
  };

  render() {
    let id = uniqid('item-') + uniqid();
    console.log(this.props.user);
    return (
      <Container direction="left">
        <ItemForm
          onSubmit={this.onSubmit}
          header="Post New Stuff"
          id={id}
          loading={this.props.loading}
          resetBtn
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.UI.loading,
  user: state.user.credentials,
});

const title = 'Post New Item EasyPezy';

export default connect(mapStateToProps, { postItem })(
  withTitle(PostNewItem, title)
);
