import { SET_PLACES, LIKE_PLACE, UNLIKE_PLACE, LOADING_DATA } from '../types';

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
    case LIKE_PLACE:
    case UNLIKE_PLACE:
      let index = state.places.findIndex(
        (place) => place.placeId === action.payload.placeId
      );
      state.places[index] = action.payload;
      return {
        ...state,
      };
    default:
      return state;
  }
};
