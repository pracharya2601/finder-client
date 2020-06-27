import {
  SET_PLACES,
  SET_PLACE,
  LIKE_PLACE,
  UNLIKE_PLACE,
  LOADING_DATA,
  DELETE_PLACE,
  POST_PLACE,
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
      return { ...state, places: action.payload, loading: false };
    case SET_PLACES:
      return { ...state, places: action.payload };
    case LIKE_PLACE:
    case UNLIKE_PLACE:
      let index = state.places.findIndex(
        (place) => place.placeId === action.payload.placeId
      );
      state.places[index] = action.payload;
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

    default:
      return state;
  }
};
