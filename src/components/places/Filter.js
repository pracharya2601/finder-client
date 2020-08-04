import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { filterPlaces, sortPlacesViews } from '../../redux/actions/dataAction';

//material ui
import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const styles = {
  formControl: {
    minWidth: 120,
    margin: '10px',
  },
  selectEmpty: {
    marginTop: '10px',
  },
};

class Filter extends Component {
  render() {
    const { classes, places, filteredPlaces } = this.props;
    console.log(_.values(filteredPlaces));
    return (
      <div>
        <FormControl className={classes.formControl}>
          <NativeSelect
            className={classes.selectEmpty}
            onChange={(e) =>
              this.props.filterPlaces(_.values(places), e.target.value)
            }
          >
            <option value="">Select Catagory </option>
            <option value="">All </option>
            <option value="rental">Rental</option>
            <option value="sale">Sale</option>
            <option value="other">Other</option>
          </NativeSelect>
        </FormControl>
        <FormControl className={classes.formControl}>
          <NativeSelect
            className={classes.selectEmpty}
            onChange={(e) =>
              this.props.sortPlacesViews(
                _.values(filteredPlaces),
                e.target.value
              )
            }
          >
            <option value="">Filter with Views</option>
            <option value="lowestViews">View Low-High</option>
            <option value="highestViews">View High-Low</option>
          </NativeSelect>
        </FormControl>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  places: state.data.places,
  catagory: state.data.catagory,
  viewSort: state.data.viewSort,
  filteredPlaces: state.data.filteredPlaces,
});

export default connect(mapStateToProps, { filterPlaces, sortPlacesViews })(
  withStyles(styles)(Filter)
);
