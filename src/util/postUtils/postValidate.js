const validate = (values) => {
  const errors = {};
  if (!values.clubName) {
    errors.clubName = 'Required';
  }
  if (values.nearbyPlace || values.nearbyPlace.length) {
    nearbyErrors = 'At least one nearby place is Requires!';
  }
  if (values.nearbyPlace || values.nearbyPlace.length) {
    const nearbyPlaceErrors = [];
    errors.nearbyPlace = { _error: 'Enter at least one nearby Place' };
    nearbyPlace.forEach((nearby, nearbyIndex) => {
      if (!nearby || !nearby.length) {
        nearbyPlaceErrors[nearbyIndex] = 'Required';
      }
    });
  }

  return errors;
};

export default validate;
