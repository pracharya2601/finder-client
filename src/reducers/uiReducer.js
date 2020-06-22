import { SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from '../actions/types';

const INITIAL_STATE = {
  loading: false,
  errors: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return { ...state, loafing: false, errors: action.payload };
    case CLEAR_ERRORS:
      return { ...state, loading: false, errors: null };
    case LOADING_UI:
      return { ...state, loading: true };
    default:
      return state;
  }
};
