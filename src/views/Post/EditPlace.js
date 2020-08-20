import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { getPlace, updatePlace } from '../../redux/actions/dataAction';

import PlaceForm from '../../components/placeForm/PlaceForm';

class EditPlace extends React.Component {
  componentWillMount() {
    this.props.getPlace(this.props.match.params.placeId);
  }
  onSubmit = (values) => {
    this.props.updatePlace(this.props.match.params.placeId, values, () => {
      this.props.history.push(`/place/${this.props.match.params.placeId}`);
    });
  };
  render() {
    if (!this.props.place) {
      return <div>Loading</div>;
    }
    return (
      <PlaceForm
        initialValues={_.pick(
          this.props.place,
          'body',
          'description',
          'catagory',
          'priceRange',
          'address',
          'contactNo'
        )}
        onSubmit={this.onSubmit}
        id={this.props.place.placeId}
        header="Edit Item Info"
        loading={this.props.loading}
        addImg
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  loading: state.UI.loading,
  place: state.data.place,
});

export default connect(mapStateToProps, { getPlace, updatePlace })(EditPlace);
