import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { postPlace } from '../../redux/actions/dataAction';

import FirstForm from './Forms/FirstForm';
import SecondForm from './Forms/SecondForm';
import ConfirmForm from './Forms/ConfirmForm';

//material ui

class PostPlace extends React.Component {
  state = {
    step: 1,
    body: '',
    description: '',
    address: '',
    contactNo: '',
    priceRange: '',
    // catagory: ''
    errors: {},
  };

  //proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  //back to previous step
  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  plac;

  handleSubmit = (event) => {
    event.preventDefault();
    const placeData = {
      body: this.state.body,
      description: this.state.description,
      address: this.state.address,
      contactNo: this.state.contactNo,
      priceRange: this.state.priceRange,
    };
    this.props.postPlace(placeData);
  };

  render() {
    const { step } = this.state;
    const {
      catagory,
      body,
      description,
      address,
      contactNo,
      priceRange,
    } = this.state;

    const {
      loading,
      user: { authenticated },
    } = this.props;

    const placeData = {
      catagory,
      body,
      description,
      address,
      contactNo,
      priceRange,
    };
    switch (step) {
      case 1:
        return (
          <FirstForm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            placeData={placeData}
            isAuthenticated={authenticated}
          />
        );
      case 2:
        return (
          <SecondForm
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            placeData={placeData}
            isAuthenticated={authenticated}
          />
        );
      case 3:
        return (
          <ConfirmForm
            submitForm={this.handleSubmit}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            placeData={placeData}
            isAuthenticated={authenticated}
          />
        );
    }
  }
}

PostPlace.propTypes = {
  postPlace: PropTypes.func.isRequired,
  // UI: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.UI,
  user: state.user,
});

export default connect(mapStateToProps, { postPlace })(PostPlace);
