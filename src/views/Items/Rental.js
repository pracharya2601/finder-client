import React from 'react';
import { connect } from 'react-redux';
import { getRentalItems } from '../../redux/actions/dataAction';
import LoadingPage from '../../components/loading/LoadingPage';

//title
import withTitle from '../../util/withTitle';

import Footer from '../../components/footer/Footer';

//page
import Page from '../../components/page/Page';

class Rental extends React.Component {
  componentDidMount() {
    this.props.getRentalItems();
  }
  render() {
    const { loading, rentalItems } = this.props;
    const renderMarkup = loading ? (
      <LoadingPage />
    ) : (
      <Page loading={loading} items={rentalItems} pageName="Rental Items" />
    );

    return (
      <>
        <div
          style={{
            margin: '80px auto 50px auto',
            maxWidth: '1200px',
          }}
        >
          {renderMarkup}
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  rentalItems: state.data.rentalItems,
});

const title = 'Rental Items EazyPezy';

export default connect(mapStateToProps, { getRentalItems })(
  withTitle(Rental, title)
);
