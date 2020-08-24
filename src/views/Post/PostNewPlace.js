import React from 'react';
import uniqid from 'uniqid';

//title
import withTitle from '../../util/withTitle';

import { connect } from 'react-redux';
import { postPlace } from '../../redux/actions/dataAction';

//import placeform
import PlaceForm from '../../components/placeForm/PlaceForm';

class PostNewPlace extends React.Component {
  onSubmit = (values) => {
    this.props.postPlace(values, () => {
      this.props.history.push('/all');
    });
  };

  render() {
    let id = uniqid('place-') + uniqid();
    return (
      <>
        <PlaceForm
          onSubmit={this.onSubmit}
          header="Post New Stuff"
          id={id}
          loading={this.props.loading}
          resetBtn
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.UI.loading,
});

const title = 'Post New Item EasyPezy';

export default connect(mapStateToProps, { postPlace })(
  withTitle(PostNewPlace, title)
);
