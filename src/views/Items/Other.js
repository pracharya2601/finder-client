import React from 'react';
import { connect } from 'react-redux';
import { getOtherPlace } from '../../redux/actions/dataAction';

//page
import Page from '../../components/page/Page';
import LoadingPage from '../../components/loading/LoadingPage';

class Other extends React.Component {
  componentDidMount() {
    this.props.getOtherPlace();
  }
  render() {
    const { loading, otherPlaces } = this.props;
    const renderMarkup = loading ? (
      <LoadingPage />
    ) : (
      <Page
        loading={loading}
        items={otherPlaces}
        pageName="Other Catagory Items"
      />
    );

    return <div>{renderMarkup}</div>;
  }
}

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  otherPlaces: state.data.otherPlaces,
});

export default connect(mapStateToProps, { getOtherPlace })(Other);
