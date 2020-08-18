import React from 'react';

//lodash
import _ from 'lodash';

//import
import Place from '../places/Place';
import Skeleton from '../loading/Skeleton';
import Pagination from '../pagination/Pagination';

//material ui
//materialui
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';
import { blue } from '@material-ui/core/colors';

const styles = {
  paginationCard: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    backgroundColor: '#F3F3E7',
    marginTop: '20px',
    borderTop: '1px solid lightgrey',
    borderBottom: '1px solid lightgrey',
  },
  pagename: {
    padding: '10px 0 10px 0',
    fontSize: '1.5rem',
    color: 'green',
    textDecorationLine: 'underline',
    textDecorationColor: 'blue',
    textDecorationStyle: 'double',
  },
};

class Page extends React.Component {
  state = {
    currentPlaces: {},
    currentPage: null,
    totalPages: null,
  };
  onPageChanged = (itemsData) => {
    const { items } = this.props;
    const { currentPage, totalPages, pageLimit } = itemsData;

    const offset = (currentPage - 1) * pageLimit;
    const currentPlaces = Object.keys(items)
      .slice(offset, offset + pageLimit)
      .reduce((result, key) => {
        result[key] = items[key];

        return result;
      }, {});

    this.setState({ currentPage, currentPlaces, totalPages });
  };

  render() {
    const { items, loading, classes, pageName } = this.props;
    const { currentPlaces, currentPage, totalPages } = this.state;
    if (Object.keys(items).length === 0) return null;
    let item = _.map(currentPlaces, (itemData) => {
      return (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          spacing={2}
          key={itemData.placeId}
        >
          <Place place={itemData} />
        </Grid>
      );
    });
    return (
      <div>
        <div className={classes.pagename}>{pageName} :</div>
        {loading && <Skeleton />}
        <Grid container spacing={2}>
          {item}
        </Grid>
        <div className={classes.paginationCard}>
          {currentPage && (
            <CardActions className={classes.pageCount}>
              Page : {currentPage} / {totalPages}
            </CardActions>
          )}
          <>
            <Pagination
              totalRecords={Object.keys(items).length}
              pageLimit={4}
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
