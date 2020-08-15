import React from 'react';
import { connect } from 'react-redux';
import { getRentalPlace } from '../../redux/actions/dataAction';
import LoadingPage from '../../components/loading/LoadingPage';

//page
import Page from '../../components/page/Page';

class Rental extends React.Component {
  componentDidMount() {
    this.props.getRentalPlace();
  }
  render() {
    const { loading, rentalPlaces } = this.props;
    const renderMarkup = loading ? (
      <LoadingPage />
    ) : (
      <Page loading={loading} items={rentalPlaces} pageName="Rental Items" />
    );

    return <div>{renderMarkup}</div>;
  }
}

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  rentalPlaces: state.data.rentalPlaces,
});

export default connect(mapStateToProps, { getRentalPlace })(Rental);
