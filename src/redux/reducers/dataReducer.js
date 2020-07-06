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
      let index = state.places.findIndex(
        (place) => place.placeId === action.payload.placeId
      );
      state.places[index] = action.payload;
      return {
        ...state,
      };
    case SAVE_PLACE:
    case UNSAVE_PLACE:
      let saveIndex = state.places.findIndex(
        (place) => place.placeId === action.payload.placeId
      );
      state.places[saveIndex] = action.payload;
      return {
        ...state,
      };
    case DELETE_PLACE:
      let item = state.places.findIndex(
        (place) => place.placeId === action.payload
      );
      state.places.splice(item, 1);

    case POST_PLACE:
      return {
        ...state,
        places: [action.payload, ...state.places],
      };
    case SUBMIT_COMMENT:
      return {
        ...state,
        place: {
          ...state.place,
          comments: [action.payload, ...state.place.comments],
        },
      };

    default:
      return state;
  }
};
