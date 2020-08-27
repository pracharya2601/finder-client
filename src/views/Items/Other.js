import React from 'react';
import { connect } from 'react-redux';
import { getOtherItems } from '../../redux/actions/dataAction';

//title
import withTitle from '../../util/withTitle';

import Container from '../../components/container/Container';
import Header from '../../components/container/Header';
import Footer from '../../components/footer/Footer';

//page
import Page from '../../components/page/Page';

class Other extends React.Component {
  componentDidMount() {
    this.props.getOtherItems();
  }
  render() {
    const { loading, otherItems } = this.props;
    const renderMarkup = (
      <Page
        loading={loading}
        items={otherItems}
        pageName="Other Catagory Items"
      />
    );

    return (
      <React.Fragment>
        <div style={{ margin: '80px auto -50px auto', maxWidth: '1200px' }}>
          <Header heading="Other Catagory" />
        </div>
        <Container direction="left">{renderMarkup}</Container>
        <Footer />
      </React.Fragment>
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
