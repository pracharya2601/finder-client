import {
  SET_ERRORS,
  ALERT_MESSAGE,
  CLEAR_ERRORS,
  LOADING_UI,
  STOP_LOADING_UI,
} from '../types';

const INITIAL_STATE = {
  loading: false,
  errors: null,
  message: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case ALERT_MESSAGE:
      return {
        ...state,
        loading: false,
        message: 'Email was sent please check your email to reset password',
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null,
      };
    case LOADING_UI:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING_UI:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
