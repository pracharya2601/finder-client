import React from 'react';
import uniqid from 'uniqid';

//title
import withTitle from '../../util/withTitle';

//navbar
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer/Footer';

import { connect } from 'react-redux';
import { postItem } from '../../redux/actions/dataAction';

//import itemform
import ItemForm from '../../components/itemForm/ItemForm';
import Container from '../../components/container/Container';

class PostNewItem extends React.Component {
  onSubmit = (values) => {
    this.props.postItem(values, () => {
      this.props.history.push('/');
    });
  };

  render() {
    let id = uniqid('item-') + uniqid();
    return (
      <>
        <Navbar />
        <Container direction="left">
          <ItemForm
            onSubmit={this.onSubmit}
            header="Post New Stuff"
            id={id}
            loading={this.props.loading}
            resetBtn
          />
        </Container>
        <Footer />
      </>
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
