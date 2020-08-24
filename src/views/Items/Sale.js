import React from 'react';
import { connect } from 'react-redux';
import { getSalePlace } from '../../redux/actions/dataAction';

//title
import withTitle from '../../util/withTitle';

//page
import Page from '../../components/page/Page';
import LoadingPage from '../../components/loading/LoadingPage';

class Sale extends React.Component {
  componentDidMount() {
    this.props.getSalePlace();
  }
  render() {
    const { loading, salePlaces } = this.props;
    const renderMarkup = loading ? (
      <LoadingPage />
    ) : (
      <Page loading={loading} items={salePlaces} pageName="Sale Items" />
    );

    return <div>{renderMarkup}</div>;
  }
}

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  salePlaces: state.data.salePlaces,
});

const title = 'All Items EazyPezy';

export default connect(mapStateToProps, { getSalePlace })(
  withTitle(Sale, title)
);
