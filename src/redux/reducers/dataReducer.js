import _, { omit } from 'lodash';
import {
  SET_ITEMS,
  SET_RENTAL_ITEMS,
  SET_SALE_ITEMS,
  SET_OTHER_ITEMS,
  SET_ITEM,
  LIKE_ITEM,
  UNLIKE_ITEM,
  MARK_AVAILABLE,
  MARK_UNAVAILABLE,
  SAVE_ITEM,
  UNSAVE_ITEM,
  LOADING_DATA,
  DELETE_ITEM,
  POST_ITEM,
  UPDATE_ITEM,
  SUBMIT_COMMENT,
  SUBMIT_REPORT,
  SUBMIT_MAIL,
  // FILTER_BY_CATAGORY,
  FILTER_BY_VIEWCOUNT,
} from '../types';

const INITIAL_STATE = {
  items: {},
  rentalItems: {},
  saleItems: {},
  otherItems: {},
  viewSort: '',
  item: {},
  loading: false,
  message: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING_DATA:
      return { ...state, loading: true };
    case SET_ITEMS:
      return {
        ...state,
        items: _.mapKeys(action.payload, 'itemId'),
        // filteredItems: _.mapKeys(action.payload, 'itemId'),
        loading: false,
      };
    case SET_RENTAL_ITEMS:
      return {
        ...state,
        rentalItems: _.mapKeys(action.payload, 'itemId'),
        loading: false,
      };
    case SET_SALE_ITEMS:
      return {
        ...state,
        saleItems: _.mapKeys(action.payload, 'itemId'),
        loading: false,
      };
    case SET_OTHER_ITEMS:
      return {
        ...state,
        otherItems: _.mapKeys(action.payload, 'itemId'),
        loading: false,
      };
    case FILTER_BY_VIEWCOUNT:
      return {
        ...state,
        filteredItems: _.mapKeys(action.payload.items, 'itemId'),
        viewSort: action.payload.viewSort,
        loading: false,
      };
    case SET_ITEM:
      return { ...state, item: action.payload };
    case LIKE_ITEM:
    case UNLIKE_ITEM:
      return { ...state, [action.payload.itemId]: action.payload };
    case MARK_AVAILABLE:
    case MARK_UNAVAILABLE:
      return { ...state, [action.payload.itemId]: action.payload };
    case SAVE_ITEM:
    case UNSAVE_ITEM:
      return { ...state, [action.payload.itemId]: action.payload };
    case DELETE_ITEM:
      return {
        ...state,
        items: omit(state.items, action.payload),
      };
    case POST_ITEM:
      return {
        ...state,
        [action.payload.itemId]: action.payload,
      };
    case UPDATE_ITEM:
      return {
        ...state,
        [action.payload.itemId]: action.payload,
      };
    case SUBMIT_COMMENT:
      return {
        ...state,
        item: {
          ...state.item,
          comments: [action.payload, ...state.item.comments],
        },
      };
    case SUBMIT_REPORT:
      return {
        ...state,
        message: 'we will review this post to make sure this is okay',
        loading: false,
      };
    case SUBMIT_MAIL:
      return {
        ...state,
        message: 'Your Message Has ben sent.',
        loading: false,
      };
    default:
      return state;
  }
};
