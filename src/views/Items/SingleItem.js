import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import SingleItemRender from '../../components/items/SingleItemRender';

import { connect } from 'react-redux';
import { getItem, clearErrors } from '../../redux/actions/dataAction';

import withTitle from '../../util/withTitle';

class SingleItem extends React.Component {
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    this.props.getItem(this.props.match.params.itemId);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {
      item,
      UI: { loading },
      user: {
        credentials: { handle },
      },
    } = this.props;
    const sameUser = item.userHandle === handle ? true : false;
    const catagory =
      item.catagory === 'sale'
        ? 'For Sale'
        : item.catagory === 'rental'
        ? 'For Rent'
        : item.catagory === 'other'
        ? 'Other'
        : null;
    if (!item) {
      return <h1>Loading...</h1>;
    }
    return (
      <SingleItemRender
        itemId={item.itemId}
        item={item.item}
        itemImgUrl={item.itemImgUrl}
        likeCount={item.likeCount}
        commentCount={item.commentCount}
        name={item.name}
        userData={item.userData}
        available={item.available}
        selectApply={item.selectApply}
        description={item.description}
        pointDescription={item.pointDescription}
        nearbyPlace={item.nearbyPlace}
        priceRange={item.priceRange}
        hasPrice={item.hasPrice}
        viewCount={item.viewCount}
        hasPrice={item.hasPrice}
        showNum={item.showNum}
        contactNo={item.contactNo}
        address={item.address}
        realstate={item.realstate}
        comments={item.comments}
        userData={item.userData}
        isOwner={sameUser}
        catagory={catagory}
      />
    );
  }
}

SingleItem.propTypes = {
  clearErrors: PropTypes.func.isRequired,
  getItem: PropTypes.func.isRequired,
  itemId: PropTypes.string,
  item: PropTypes.object,
  UI: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  item: state.data.item,
  UI: state.UI,
  user: state.user,
});

let title = 'singleitem';

export default connect(mapStateToProps, { getItem, clearErrors })(
  withTitle(SingleItem, title)
);
