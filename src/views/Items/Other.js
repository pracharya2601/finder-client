import React from 'react';
import { connect } from 'react-redux';
import { getOtherPlace } from '../../redux/actions/dataAction';

//page
import Page from '../../components/page/Page';

class Other extends React.Component {
  componentDidMount() {
    this.props.getOtherPlace();
  }
  render() {
    const { loading, otherPlaces } = this.props;
    return (
      <div>
        <Page
          loading={loading}
          items={otherPlaces}
          pageName="Other Catagory Items"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.data.loading,
  otherPlaces: state.data.otherPlaces,
});

export default connect(mapStateToProps, { getOtherPlace })(Other);
