import React from 'react';

//lodash
import _ from 'lodash';

//import
import Item from '../items/Item';
import Skeleton from '../loading/Skeleton';
import Pagination from '../pagination/Pagination';

//material ui
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';

const styles = {
  paginationCard: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    backgroundColor: '#F3F3E7',
    marginTop: '20px',
    borderTop: '1px solid  #4b62c9',
    borderBottom: '1px solid #4b62c9',
  },
  pagename: {
    padding: '10px 0 10px 0',
    fontSize: '1.5rem',
    color: 'green',
    textDecorationLine: 'underline',
    textDecorationColor: 'blue',
    textDecorationStyle: 'double',
  },
  pageCount: {
    color: '#4b62c9',
  },
};

class Page extends React.Component {
  state = {
    currentItems: {},
    currentPage: null,
    totalPages: null,
  };
  onPageChanged = (itemsData) => {
    const { items } = this.props;
    const { currentPage, totalPages, pageLimit } = itemsData;

    const offset = (currentPage - 1) * pageLimit;
    const currentItems = Object.keys(items)
      .slice(offset, offset + pageLimit)
      .reduce((result, key) => {
        result[key] = items[key];

        return result;
      }, {});

    this.setState({ currentPage, currentItems, totalPages });
  };

  render() {
    const { items, loading, classes } = this.props;
    const { currentItems, currentPage, totalPages } = this.state;

    if (Object.keys(items).length === 0) return null;

    let item = _.map(currentItems, (itemData) => {
      return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={itemData.itemId}>
          <Item item={itemData} />
        </Grid>
      );
    });

    const nums = [1, 2, 3, 4, 5, 6, 7, 8];

    const skeletonItem = nums.map((num) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={num}>
        <Skeleton key={num} />
      </Grid>
    ));
    const itemMarkup = loading
      ? skeletonItem
      : Object.keys(items).length < 1
      ? skeletonItem
      : item;

    return (
      <div>
        <Grid container spacing={2}>
          {itemMarkup}
        </Grid>
        <div className={classes.paginationCard}>
          {currentPage && (
            <CardActions className={classes.pageCount}>
              Page : {currentPage} of {totalPages}
            </CardActions>
          )}
          <>
            <Pagination
              totalRecords={Object.keys(items).length}
              pageLimit={8}
              pageNeighbours={1}
              onPageChanged={this.onPageChanged}
            />
          </>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Page);
