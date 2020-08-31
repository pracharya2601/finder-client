import {
  SET_ITEMS,
  SET_RENTAL_ITEMS,
  SET_SALE_ITEMS,
  SET_OTHER_ITEMS,
  SET_ITEM,
  POST_ITEM,
  UPDATE_ITEM,
  LOADING_DATA,
  LIKE_ITEM,
  UNLIKE_ITEM,
  SAVE_ITEM,
  UNSAVE_ITEM,
  MARK_AVAILABLE,
  MARK_UNAVAILABLE,
  DELETE_ITEM,
  CLEAR_ERRORS,
  SET_ERRORS,
  LOADING_UI,
  STOP_LOADING_UI,
  SUBMIT_COMMENT,
  SUBMIT_MAIL,
  SUBMIT_REPORT,
  FILTER_BY_VIEWCOUNT,
} from '../types';
import axios from 'axios';
import history from '../../history';

// get all places
export const getItems = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios.get('/items').then((res) => {
    dispatch({
      type: SET_ITEMS,
      payload: res.data,
    });
  });
};

//get rental places
export const getRentalItems = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios.get('/rentalItems').then((res) => {
    dispatch({
      type: SET_RENTAL_ITEMS,
      payload: res.data,
    });
  });
};

//get sale places
export const getSaleItems = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios.get('/saleItems').then((res) => {
    dispatch({
      type: SET_SALE_ITEMS,
      payload: res.data,
    });
  });
};

//get other catagory places
export const getOtherItems = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios.get('/otherItems').then((res) => {
    dispatch({
      type: SET_OTHER_ITEMS,
      payload: res.data,
    });
  });
};

//sort place by views
export const sortItemsViews = (placeItems, sort) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  let places = placeItems.slice();
  if (sort !== '') {
    places.sort((a, b) =>
      sort === 'lowestViews'
        ? a.viewCount > b.viewCount
          ? 1
          : -1
        : a.viewCount < b.viewCount
        ? 1
        : -1
    );
  } else {
    places.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  dispatch({
    type: FILTER_BY_VIEWCOUNT,
    payload: {
      viewSort: sort,
      places: places,
    },
  });
};

//get single place
export const getItem = (itemId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/item/${itemId}`)
    .then((res) => {
      dispatch({
        type: SET_ITEM,
        payload: res.data,
      });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch((err) => {
      console.log(err);
    });
};

//post place
export const postItem = (itemData, callback) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post('/item', itemData)
    .then((res) => {
      dispatch({
        type: POST_ITEM,
        payload: res.data,
      });
      dispatch(clearErrors());
    })
    .then(() => callback())
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response,
      });
    });
};

//update place
export const updateItem = (itemId, itemData, callback) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`/item/${itemId}/update`, itemData)
    .then((res) => {
      dispatch({
        type: UPDATE_ITEM,
        payload: res.data,
      });
      dispatch(clearErrors());
    })
    .then(() => callback())
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response,
      });
    });
};

//like a place
export const likeItem = (itemId) => (dispatch) => {
  axios
    .get(`/item/${itemId}/like`)
    .then((res) => {
      dispatch({
        type: LIKE_ITEM,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//unlike place
export const unLikeItem = (itemId) => (dispatch) => {
  axios
    .get(`/item/${itemId}/unlike`)
    .then((res) => {
      dispatch({
        type: UNLIKE_ITEM,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//mark available item
export const markAvailable = (itemId) => (dispatch) => {
  axios
    .get(`/item/${itemId}/available`)
    .then((res) => {
      dispatch({
        type: MARK_AVAILABLE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//mark unavailable item
export const markUnavailable = (itemId) => (dispatch) => {
  axios
    .get(`/item/${itemId}/unavailable`)
    .then((res) => {
      dispatch({
        type: MARK_UNAVAILABLE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//save item
export const saveItem = (itemId) => (dispatch) => {
  axios
    .get(`/item/${itemId}/save`)
    .then((res) => {
      dispatch({
        type: SAVE_ITEM,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//unlike item
export const unSaveItem = (itemId) => (dispatch) => {
  axios
    .get(`/item/${itemId}/unsave`)
    .then((res) => {
      dispatch({
        type: UNSAVE_ITEM,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//submitcomment
export const submitComment = (itemId, commentData) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .post(`/item/${itemId}/comment`, commentData)
    .then((res) => {
      dispatch({
        type: SUBMIT_COMMENT,
        payload: res.data,
      });
      dispatch(clearErrors());
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response,
      });
    });
};

export const reportPost = (itemId, reportData) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .post(`/item/${itemId}/report`, reportData)
    .then((res) => {
      dispatch({
        type: SUBMIT_REPORT,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response,
      });
    });
};

export const sendMail = (mailData) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .post(`/sendMail`, mailData)
    .then((res) => {
      dispatch({
        type: SUBMIT_MAIL,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response,
      });
    });
};

export const deleteItem = (itemId) => async (dispatch) => {
  await axios.delete(`/item/${itemId}`);
  dispatch({
    type: DELETE_ITEM,
    payload: itemId,
  });
  history.push('/');
  window.location.reload();
};

export const fetchUserData = (userHandle) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/user/${userHandle}`)
    .then((res) => {
      dispatch({
        type: SET_ITEMS,
        payload: res.data.places,
      });
    })
    .catch(() => {
      dispatch({
        type: SET_ITEMS,
        payload: null,
      });
    });
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
