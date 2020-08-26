import React from 'react';
import { connect } from 'react-redux';
import { getItems } from '../../redux/actions/dataAction';
//title
import withTitle from '../../util/withTitle';

//page
import Page from '../../components/page/Page';
import LoadingPage from '../../components/loading/LoadingPage';
import Footer from '../../components/footer/Footer';

class All extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    const { loading, items } = this.props;
    const renderMarkup = loading ? (
      <LoadingPage />
    ) : (
      <Page loading={loading} items={items} pageName="All Items" />
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

const title = 'All Items EazyPezy';

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  items: state.data.items,
});

export default connect(mapStateToProps, { getItems })(withTitle(All, title));
