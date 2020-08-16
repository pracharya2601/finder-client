import React from 'react';
import PropTypes from 'prop-types';
import '../../components/css/Home.css';
import _ from 'lodash';

//materialui
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import CardActions from '@material-ui/core/CardActions';

import Skeleton from '../../components/loading/Skeleton';
import Place from '../../components/places/Place';
// import Filter from '../../components/places/Filter';

import Pagination from '../../components/pagination/Pagination';

import { connect } from 'react-redux';
import {
  getPlaces,
  getOtherPlace,
  getSalePlace,
  getRentalPlace,
} from '../../redux/actions/dataAction';

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
};

class Home extends React.Component {
  state = {
    currentPlaces: {},
    currentPage: null,
    totalPages: null,
  };

  componentDidMount() {
    this.props.getPlaces();
    this.props.getOtherPlace();
    this.props.getSalePlace();
    this.props.getRentalPlace();
  }
  onPageChanged = (itemsData) => {
    const { data } = this.props;
    const { currentPage, totalPages, pageLimit } = itemsData;

    const offset = (currentPage - 1) * pageLimit;
    const currentPlaces = Object.keys(data)
      .slice(offset, offset + pageLimit)
      .reduce((result, key) => {
        result[key] = data[key];

        return result;
      }, {});

    this.setState({ currentPage, currentPlaces, totalPages });
  };

  render() {
    const { data, classes, loading } = this.props;
    const { currentPlaces, currentPage, totalPages } = this.state;
    if (Object.keys(data).length === 0) return null;
    // let recentPlace = data ? (
    //   _.map(currentPlaces, (place) => {
    //     return <Place place={place} key={place.placeId} />;
    //   })
    // ) : loading ? (
    //   <>
    //     <Skeleton />
    //     <Skeleton />
    //     <Skeleton />
    //     <Skeleton />
    //   </>
    // ) : null;

    let recentPlace = loading ? (
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    ) : (
      _.map(currentPlaces, (place) => {
        return <Place place={place} key={place.placeId} />;
      })
    );

    return (
      <>
        {/* <Card>
          <Filter />
        </Card> */}
        <Grid container spacing={2}>
          {recentPlace}
        </Grid>
        <div className={classes.paginationCard}>
          {currentPage && (
            <CardActions className={classes.pageCount}>
              Page : {currentPage} / {totalPages}
            </CardActions>
          )}
          <>
            <Pagination
              totalRecords={Object.keys(data).length}
              pageLimit={4}
              pageNeighbours={1}
              onPageChanged={this.onPageChanged}
            />
          </>
        </div>
      </>
    );
  }
}

Home.propTypes = {
  getPlaces: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  data: state.data.places,
});

export default connect(mapStateToProps, {
  getPlaces,
  getOtherPlace,
  getSalePlace,
  getRentalPlace,
})(withStyles(styles)(Home));
