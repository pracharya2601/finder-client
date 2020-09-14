import React from 'react';
import _ from 'lodash';

//title
import Title from '../../util/Title';

//navbar
import Navbar from '../../components/Navbar';

//with title
import withTitle from '../../util/withTitle';

import Skeleton from '../../components/loading/Skeleton';
import Item from '../../components/items/Item';

import Container from '../../components/container/Container';
import ItemCarousel from '../../components/carousel/ItemCarousel';
import Header from '../../components/container/Header';
import Footer from '../../components/footer/Footer';

import { connect } from 'react-redux';
import { getItems } from '../../redux/actions/dataAction';

class Home extends React.Component {
  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const {
      allItems,
      rentalItems,
      saleItems,
      otherItems,
      loading,
    } = this.props;
    const nums = [1, 2, 3, 4, 5];
    const skeleton = nums.map((num) => (
      <div key={num} style={{ position: 'relative', width: '100%' }}>
        <Skeleton />
      </div>
    ));

    let allItemsMarkup = loading
      ? skeleton
      : _.map(allItems, (item) => {
          return <Item item={item} key={item.itemId} />;
        });
    let rentalItemsMarkup = loading
      ? skeleton
      : _.map(rentalItems, (item) => {
          return <Item item={item} key={item.itemId} />;
        });
    let saleItemMarkup = loading
      ? skeleton
      : _.map(saleItems, (item) => {
          return <Item item={item} key={item.itemId} />;
        });
    let otherItemsMarkup = loading
      ? skeleton
      : _.map(otherItems, (item) => {
          return <Item item={item} key={item.itemId} margin />;
        });

    return (
      <>
        <Title title="easypezy" />
        <Navbar />
        <Container>
          <div style={style}>
            {!loading && (
              <Header heading="Recent" goTo="/all" goToText="See All" home />
            )}
            <ItemCarousel>{allItemsMarkup}</ItemCarousel>
          </div>
          <div style={style}>
            {!loading && (
              <Header
                heading="For Rent"
                goTo="/rental"
                goToText="See All"
                home
              />
            )}
            <ItemCarousel>{rentalItemsMarkup}</ItemCarousel>
          </div>
          <div style={style}>
            {!loading && (
              <Header
                heading="For Sale "
                goTo="/sale"
                goToText="See All"
                home
              />
            )}
            <ItemCarousel>{saleItemMarkup}</ItemCarousel>
          </div>
          <div style={style}>
            {!loading && (
              <Header
                heading="Other Catagory"
                goTo="/other"
                goToText="See All"
                home
              />
            )}
            <ItemCarousel>{otherItemsMarkup}</ItemCarousel>
          </div>
        </Container>
        <Footer />
      </>
    );
  }
}

const style = {
  boxSizing: 'border-box',
  padding: '0 0 3% 0',
};

const slicedItem = (myObject) => {
  const sliced = Object.keys(myObject)
    .slice(0, 10)
    .reduce((result, key) => {
      result[key] = myObject[key];

      return result;
    }, {});
  return sliced;
};

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  allItems: slicedItem(state.data.items),
  rentalItems: _.slice(
    _.filter(state.data.items, (item) => {
      return item.catagory == 'rental';
    }),
    0,
    10
  ),
  saleItems: _.slice(
    _.filter(state.data.items, (item) => {
      return item.catagory == 'sale';
    }),
    0,
    10
  ),
  otherItems: _.slice(
    _.filter(state.data.items, (item) => {
      return item.catagory == 'other';
    }),
    0,
    10
  ),
});

const home = 'EazyPezy';

export default connect(mapStateToProps, {
  getItems,
})(Home);
