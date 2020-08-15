import React from 'react';
import { connect } from 'react-redux';
import { getSalePlace } from '../../redux/actions/dataAction';

//page
import Page from '../../components/page/Page';

class Sale extends React.Component {
  componentDidMount() {
    this.props.getSalePlace();
  }
  render() {
    const { loading, salePlaces } = this.props;
    return (
      <div>
        <Page loading={loading} items={salePlaces} pageName="Sale Items" />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  salePlaces: state.data.salePlaces,
});

export default connect(mapStateToProps, { getSalePlace })(Sale);
