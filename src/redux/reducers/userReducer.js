import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER,
  LIKE_PLACE,
  UNLIKE_PLACE,
  MARK_NOTIFICATIONS_READ,
  LOADING_UI,
} from '../types';

const INITIAL_STATE = {
  authenticated: false,
  loading: false,
  credentials: {},
  likes: [],
  notifications: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return INITIAL_STATE;
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        ...action.payload,
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };
    case LIKE_PLACE:
      return {
        ...state,
        likes: [
          ...state.likes,
          {
            userHandle: state.credentials.handle,
            placeId: action.payload.placeId,
          },
        ],
      };
    case UNLIKE_PLACE:
      return {
        ...state,
        likes: state.likes.filter(
          (like) => like.placeId !== action.payload.placeId
        ),
      };
    default:
      return state;
  }
};
