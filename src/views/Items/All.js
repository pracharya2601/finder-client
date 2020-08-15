import React from 'react';
import { connect } from 'react-redux';
import { getPlaces } from '../../redux/actions/dataAction';

//page
import Page from '../../components/page/Page';
import LoadingPage from '../../components/loading/LoadingPage';

class All extends React.Component {
  componentDidMount() {
    this.props.getPlaces();
  }
  render() {
    const { loading, places } = this.props;
    const renderMarkup = loading ? (
      <LoadingPage />
    ) : (
      <Page loading={loading} items={places} pageName="All Items" />
    );

    return <div>{renderMarkup}</div>;
  }
}

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  places: state.data.places,
});

export default connect(mapStateToProps, { getPlaces })(All);
