import React from 'react';
import { connect } from 'react-redux';
import { getPlaces } from '../../redux/actions/dataAction';

//page
import Page from '../../components/page/Page';

class All extends React.Component {
  componentDidMount() {
    this.props.getPlaces();
  }
  render() {
    const { loading, places } = this.props;
    return (
      <div>
        <Page loading={loading} items={places} pageName="All Items" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  places: state.data.places,
});

export default connect(mapStateToProps, { getPlaces })(All);
