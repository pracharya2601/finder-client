import React from 'react';
import { connect } from 'react-redux';
import { getRentalPlace } from '../../redux/actions/dataAction';

//page
import Page from '../../components/page/Page';

class Rental extends React.Component {
  componentDidMount() {
    this.props.getRentalPlace();
  }
  render() {
    const { loading, rentalPlaces } = this.props;
    return (
      <div>
        <Page loading={loading} items={rentalPlaces} pageName="Rental Items" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  rentalPlaces: state.data.rentalPlaces,
});

export default connect(mapStateToProps, { getRentalPlace })(Rental);
