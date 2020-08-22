import React, { Component } from 'react';
import PropTypes from 'prop-types';

//material ui
import withStyles from '@material-ui/core/styles/withStyles';
import CardActions from '@material-ui/core/CardActions';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const styles = {
  pagination: {
    listStyle: 'none',
  },
  pageItem: {
    backgroundColor: '#cfd8ff',
    border: '3px solid #cfd8ff',
    borderRadius: '5px',
    '&:hover': {
      background: '#efefef',
    },
  },
  pageActiveItem: {
    background: '#4b62c9',
    color: 'white',
    border: '3px solid #4b62c9',
    borderRadius: '5px',
    textDecorationLine: 'underline',
    textDecorationColor: 'white',
  },
};

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

class Pagination extends Component {
  constructor(props) {
    super(props);
    const { pageNeighbours = 0 } = props;
    this.pageNeighbours =
      typeof pageNeighbours === 'number'
        ? Math.max(0, Math.min(pageNeighbours, 2))
        : 0;

    this.state = { currentPage: 1 };
  }

  componentDidMount() {
    this.gotoPage(1);
  }

  gotoPage = (page) => {
    const { onPageChanged = (f) => f } = this.props;
    const { totalRecords, pageLimit } = this.props;
    const totalPages = Math.ceil(totalRecords / pageLimit);

    const currentPage = Math.max(0, Math.min(page, totalPages));

    const paginationData = {
      currentPage,
      totalPages: totalPages,
      pageLimit: pageLimit,
      totalRecords: totalRecords,
    };

    this.setState({ currentPage }, () => onPageChanged(paginationData));
  };

  handleClick = (page, evt) => {
    evt.preventDefault();
    this.gotoPage(page);
    window.scrollTo(0, 0);
  };

  handleMoveLeft = (evt) => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage - this.pageNeighbours * 2 - 1);
  };

  handleMoveRight = (evt) => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage + this.pageNeighbours * 2 + 1);
  };

  fetchPageNumbers = () => {
    const { totalRecords, pageLimit } = this.props;
    const totalPage = Math.ceil(totalRecords / pageLimit);

    const totalPages = totalPage;
    const currentPage = this.state.currentPage;
    const pageNeighbours = this.pageNeighbours;

    const totalNumbers = this.pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      let pages = [];

      const leftBound = currentPage - pageNeighbours;
      const rightBound = currentPage + pageNeighbours;
      const beforeLastPage = totalPages - 1;

      const startPage = leftBound > 2 ? leftBound : 2;
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

      pages = range(startPage, endPage);

      const pagesCount = pages.length;
      const singleSpillOffset = totalNumbers - pagesCount - 1;

      const leftSpill = startPage > 2;
      const rightSpill = endPage < beforeLastPage;

      const leftSpillPage = LEFT_PAGE;
      const rightSpillPage = RIGHT_PAGE;

      if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1);
        pages = [leftSpillPage, ...extraPages, ...pages];
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset);
        pages = [...pages, ...extraPages, rightSpillPage];
      } else if (leftSpill && rightSpill) {
        pages = [leftSpillPage, ...pages, rightSpillPage];
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  render() {
    const { classes } = this.props;
    if (!this.props.totalRecords) return null;

    if (this.props.totalPages === 1) return null;

    const { currentPage } = this.state;
    const pages = this.fetchPageNumbers();

    return (
      <CardActions className={classes.pagination}>
        {pages.map((page, index) => {
          if (page === LEFT_PAGE)
            return (
              <li key={index}>
                <button
                  className={classes.pageItem}
                  aria-label="Previous"
                  onClick={this.handleMoveLeft}
                >
                  &laquo;prev
                </button>
              </li>
            );

          if (page === RIGHT_PAGE)
            return (
              <li key={index}>
                <button
                  className={classes.pageItem}
                  aria-label="Next"
                  onClick={this.handleMoveRight}
                >
                  next&raquo;
                </button>
              </li>
            );
          return (
            <li key={index} className={classes.activeItem}>
              <button
                className={`${
                  currentPage === page
                    ? classes.pageActiveItem
                    : classes.pageItem
                }`}
                onClick={(e) => this.handleClick(page, e)}
              >
                {page}
              </button>
            </li>
          );
        })}
      </CardActions>
    );
  }
}

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func,
};

export default withStyles(styles)(Pagination);
