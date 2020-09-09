import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  GET_USER,
  LOADING_USER,
  LIKE_ITEM,
  UNLIKE_ITEM,
  MARK_NOTIFICATIONS_READ,
  GET_USER_DETAIL,
  SAVE_ITEM,
  UNSAVE_ITEM,
} from '../types';

const INITIAL_STATE = {
  authenticated: false,
  loading: false,
  credentials: {},
  likes: [],
  notifications: [],
  saved: [],
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
        ...action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...action.payload,
        loading: false,
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };
    case LIKE_ITEM:
      return {
        ...state,
        likes: [
          ...state.likes,
          {
            userHandle: state.credentials.handle,
            itemId: action.payload.itemId,
          },
        ],
      };
    case UNLIKE_ITEM:
      return {
        ...state,
        likes: state.likes.filter(
          (like) => like.itemId !== action.payload.itemId
        ),
      };
    case MARK_NOTIFICATIONS_READ:
      state.notifications.forEach((not) => (not.read = true));
      return {
        ...state,
      };
    case SAVE_ITEM:
      return {
        ...state,
        saved: [
          ...state.saved,
          {
            userHandle: state.credentials.handle,
            placeId: action.payload.placeId,
          },
        ],
      };
    case UNSAVE_ITEM:
      return {
        ...state,
        saved: state.saved.filter(
          (save) => save.placeId !== action.payload.placeId
        ),
      };
    default:
      return state;
  }
};
