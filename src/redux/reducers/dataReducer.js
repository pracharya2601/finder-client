import _ from 'lodash';
import {
  SET_PLACES,
  SET_PLACE,
  LIKE_PLACE,
  UNLIKE_PLACE,
  SAVE_PLACE,
  UNSAVE_PLACE,
  LOADING_DATA,
  DELETE_PLACE,
  POST_PLACE,
  SUBMIT_COMMENT,
  SUBMIT_REPORT,
} from '../types';

const INITIAL_STATE = {
  places: [],
  place: {},
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING_DATA:
      return { ...state, loading: true };
    case SET_PLACES:
      return {
        ...state,
        places: _.mapKeys(action.payload, 'placeId'),
        loading: false,
      };
    case SET_PLACE:
      return { ...state, place: action.payload };
    case LIKE_PLACE:
    case UNLIKE_PLACE:
      return { ...state, [action.payload.placeId]: action.payload };
    case SAVE_PLACE:
    case UNSAVE_PLACE:
      return { ...state, [action.payload.placeId]: action.payload };
    case DELETE_PLACE:
      return _.omit(state, action.payload);
    case POST_PLACE:
      return {
        ...state,
        [action.payload.placeId]: action.payload,
      };
    case SUBMIT_COMMENT:
      return {
        ...state,
        place: {
          ...state.place,
          comments: [action.payload, ...state.place.comments],
        },
      };
    case SUBMIT_REPORT:
      return {
        ...state,
        message: 'we will review this post to make sure this is okay',
      };
    default:
      return state;
  }
};
