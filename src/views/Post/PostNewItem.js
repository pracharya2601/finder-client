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
import ItemForms from '../../components/itemForm/itemForms';
import Container from '../../components/container/Container';

let id = uniqid() + Math.floor(Date.now() / 1000);
// let rentalId = uniqid('rental-') + uniqid() + -Math.floor(Date.now() / 1000);
// let saleId = uniqid('sale-') + uniqid() + -Math.floor(Date.now() / 1000);
// let otherId = uniqid('other-') + uniqid() + -Math.floor(Date.now() / 1000);
// let jobId = uniqid('job-') + uniqid() + -Math.floor(Date.now() / 1000);

class PostNewItem extends React.Component {
  onSubmit = (values) => {
    this.props.postItem(values, () => {
      this.props.history.push(
        `/item/${id}-${this.props.match.params.catagory}`
      );
    });
  };

  render() {
    const catagory = this.props.match.params.catagory;
    const header =
      catagory === 'rental'
        ? 'Post Item for Rent'
        : catagory === 'sale'
        ? 'Post Item for Sale'
        : catagory === 'other'
        ? 'Post Item on Different Catagory'
        : catagory === 'job'
        ? 'Post Job'
        : undefined;

    console.log(`${this.props.match.params.catagory}-${id}`);
    if (!header) {
      return null;
    }
    return (
      <>
        <Navbar />
        <Container direction="left">
          <ItemForms
            onSubmit={this.onSubmit}
            header={header}
            id={`${id}-${this.props.match.params.catagory}`}
            catagory={this.props.match.params.catagory}
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
