import React from 'react';
import { connect } from 'react-redux';
import { getItems } from '../../redux/actions/dataAction';
//title
import withTitle from '../../util/withTitle';

//page
import Container from '../../components/container/Container';
import Header from '../../components/container/Header';
import Page from '../../components/page/Page';
import Skeleton from '../../components/loading/Skeleton';
import Footer from '../../components/footer/Footer';

class All extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    const { loading, items } = this.props;
    const renderMarkup = (
      <Page loading={loading} items={items} pageName="All Items" />
    );

    return (
      <React.Fragment>
        <div style={{ margin: '80px auto -50px auto', maxWidth: '1200px' }}>
          <Header heading="All Post" />
        </div>

        <Container direction="left">{renderMarkup}</Container>
        <Footer />
      </React.Fragment>
    );
  }
}

const title = 'All Items EazyPezy';

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  items: state.data.items,
});

export default connect(mapStateToProps, { getItems })(withTitle(All, title));
