import React from 'react';
import { connect } from 'react-redux';
import { getSaleItems } from '../../redux/actions/dataAction';

//title
import withTitle from '../../util/withTitle';

import Container from '../../components/container/Container';
import Header from '../../components/container/Header';
import Footer from '../../components/footer/Footer';

//page

import Page from '../../components/page/Page';

class Sale extends React.Component {
  componentDidMount() {
    this.props.getSaleItems();
  }
  render() {
    const { loading, saleItems } = this.props;
    const renderMarkup = (
      <Page loading={loading} items={saleItems} pageName="Sale Items" />
    );

    return (
      <React.Fragment>
        <div style={{ margin: '80px auto -50px auto', maxWidth: '1200px' }}>
          <Header heading="For Sale" />
        </div>
        <Container direction="left">{renderMarkup}</Container>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  saleItems: state.data.saleItems,
});

const title = 'All Items EazyPezy';

export default connect(mapStateToProps, { getSaleItems })(
  withTitle(Sale, title)
);
