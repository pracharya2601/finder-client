import React from 'react';
import _ from 'lodash';

//with title
import withTitle from '../../util/withTitle';

import Skeleton from '../../components/loading/Skeleton';
import Item from '../../components/items/Item';

import Container from '../../components/container/Container';
import ItemCarousel from '../../components/carousel/ItemCarousel';
import Header from '../../components/container/Header';
import Footer from '../../components/footer/Footer';

import { connect } from 'react-redux';
import {
  getItems,
  getOtherItems,
  getSaleItems,
  getRentalItems,
} from '../../redux/actions/dataAction';

class Home extends React.Component {
  componentDidMount() {
    this.props.getItems();
    this.props.getOtherItems();
    this.props.getSaleItems();
    this.props.getRentalItems();
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

    const slicedItem = (myObject) => {
      const sliced = Object.keys(myObject)
        .slice(0, 10)
        .reduce((result, key) => {
          result[key] = myObject[key];

          return result;
        }, {});
      return sliced;
    };

    let allItemsMarkup = !allItems
      ? skeleton
      : _.map(slicedItem(allItems), (item) => {
          return <Item item={item} key={item.itemId} />;
        });
    let rentalItemsMarkup = loading
      ? skeleton
      : _.map(slicedItem(rentalItems), (item) => {
          return <Item item={item} key={item.itemId} />;
        });
    let saleItemMarkup = loading
      ? skeleton
      : _.map(slicedItem(saleItems), (item) => {
          return <Item item={item} key={item.itemId} />;
        });
    let otherItemsMarkup = loading
      ? skeleton
      : _.map(slicedItem(otherItems), (item) => {
          return <Item item={item} key={item.itemId} margin />;
        });

    return (
      <>
        <Container direction="right">
          <div style={style}>
            {allItems && (
              <Header heading="Recent" goTo="/all" goToText="See All" />
            )}
            <ItemCarousel>{allItemsMarkup}</ItemCarousel>
          </div>
          <div style={style}>
            {rentalItems && (
              <Header heading="For Rent" goTo="/rental" goToText="See All" />
            )}
            <ItemCarousel>{rentalItemsMarkup}</ItemCarousel>
          </div>
          <div style={style}>
            {saleItems && (
              <Header heading="For Sale " goTo="/sale" goToText="See All" />
            )}
            <ItemCarousel>{saleItemMarkup}</ItemCarousel>
          </div>
          <div style={style}>
            {otherItems && (
              <Header
                heading="Other Catagory"
                goTo="/other"
                goToText="See All"
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

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  allItems: state.data.items,
  rentalItems: state.data.rentalItems,
  saleItems: state.data.saleItems,
  otherItems: state.data.otherItems,
});

const home = 'EazyPezy';

export default connect(mapStateToProps, {
  getItems,
  getOtherItems,
  getSaleItems,
  getRentalItems,
})(withTitle(Home, home));
