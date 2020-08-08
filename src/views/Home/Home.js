import React from 'react';
import PropTypes from 'prop-types';
import '../../components/css/Home.css';
import _, { lastIndexOf } from 'lodash';

//materialui
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';

import Skeleton from '../../components/loading/Skeleton';
import Place from '../../components/places/Place';
import Filter from '../../components/places/Filter';

import Pagination from '../../components/pagination/Pagination';

import { connect } from 'react-redux';
import { getPlaces, filterPlaces } from '../../redux/actions/dataAction';

const styles = {
  paginationCard: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    backgroundColor: '#F3F3E7',
    marginTop: '20px',
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
  }
  // componentWillReceiveProps() {
  //   this.props.filterPlaces();
  // }

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
    const { data, loading, classes } = this.props;
    const { currentPlaces, currentPage, totalPages } = this.state;
    if (Object.keys(data).length === 0) return null;
    let recentPlace = data ? (
      _.map(currentPlaces, (place) => {
        return <Place place={place} key={place.placeId} />;
      })
    ) : (
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    );

    return (
      <>
        <Card>
          <Filter />
        </Card>
        <div className="place_container">{recentPlace}</div>
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
  Places: state.data.places,
  data: state.data.filteredPlaces,
});

export default connect(mapStateToProps, { getPlaces, filterPlaces })(
  withStyles(styles)(Home)
);
