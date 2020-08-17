import _, { omit } from 'lodash';
import {
  SET_PLACES,
  SET_RENTAL_PLACES,
  SET_SALE_PLACES,
  SET_OTHER_PLACES,
  SET_PLACE,
  LIKE_PLACE,
  UNLIKE_PLACE,
  SAVE_PLACE,
  UNSAVE_PLACE,
  LOADING_DATA,
  DELETE_PLACE,
  POST_PLACE,
  UPDATE_PLACE,
  SUBMIT_COMMENT,
  SUBMIT_REPORT,
  // FILTER_BY_CATAGORY,
  FILTER_BY_VIEWCOUNT,
} from '../types';

const INITIAL_STATE = {
  places: {},
  rentalPlaces: {},
  salePlaces: {},
  otherPlaces: {},
  viewSort: '',
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
        // filteredPlaces: _.mapKeys(action.payload, 'placeId'),
        loading: false,
      };
    case SET_RENTAL_PLACES:
      return {
        ...state,
        rentalPlaces: _.mapKeys(action.payload, 'placeId'),
        loading: false,
      };
    case SET_SALE_PLACES:
      return {
        ...state,
        salePlaces: _.mapKeys(action.payload, 'placeId'),
        loading: false,
      };
    case SET_OTHER_PLACES:
      return {
        ...state,
        otherPlaces: _.mapKeys(action.payload, 'placeId'),
        loading: false,
      };
    case FILTER_BY_VIEWCOUNT:
      return {
        ...state,
        filteredPlaces: _.mapKeys(action.payload.places, 'placeId'),
        viewSort: action.payload.viewSort,
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
      return {
        ...state,
        places: omit(state.places, action.payload),
      };
    case POST_PLACE:
      return {
        ...state,
        [action.payload.placeId]: action.payload,
      };
    case UPDATE_PLACE:
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
