import React from 'react';
import { connect } from 'react-redux';
import { getOtherItems } from '../../redux/actions/dataAction';

//title
import withTitle from '../../util/withTitle';

import Footer from '../../components/footer/Footer';

//page
import Page from '../../components/page/Page';
import LoadingPage from '../../components/loading/LoadingPage';

class Other extends React.Component {
  componentDidMount() {
    this.props.getOtherItems();
  }
  render() {
    const { loading, otherItems } = this.props;
    const renderMarkup = loading ? (
      <LoadingPage />
    ) : (
      <Page
        loading={loading}
        items={otherItems}
        pageName="Other Catagory Items"
      />
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
  otherItems: state.data.otherItems,
});

const title = 'Other Catagories Items EazyPezy';

export default connect(mapStateToProps, { getOtherItems })(
  withTitle(Other, title)
);
