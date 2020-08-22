import {
  SET_PLACES,
  SET_RENTAL_PLACES,
  SET_SALE_PLACES,
  SET_OTHER_PLACES,
  SET_PLACE,
  POST_PLACE,
  UPDATE_PLACE,
  LOADING_DATA,
  LIKE_PLACE,
  UNLIKE_PLACE,
  SAVE_PLACE,
  UNSAVE_PLACE,
  MARK_AVAILABLE,
  MARK_UNAVAILABLE,
  DELETE_PLACE,
  CLEAR_ERRORS,
  SET_ERRORS,
  LOADING_UI,
  STOP_LOADING_UI,
  SUBMIT_COMMENT,
  SUBMIT_REPORT,
  FILTER_BY_VIEWCOUNT,
} from '../types';
import axios from 'axios';
import history from '../../history';

// get all places
export const getPlaces = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios.get('/places').then((res) => {
    dispatch({
      type: SET_PLACES,
      payload: res.data,
    });
  });
};

//get rental places
export const getRentalPlace = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios.get('/rentalPlaces').then((res) => {
    dispatch({
      type: SET_RENTAL_PLACES,
      payload: res.data,
    });
  });
};

//get sale places
export const getSalePlace = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios.get('/salePlaces').then((res) => {
    dispatch({
      type: SET_SALE_PLACES,
      payload: res.data,
    });
  });
};

//get other catagory places
export const getOtherPlace = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios.get('/otherPlaces').then((res) => {
    dispatch({
      type: SET_OTHER_PLACES,
      payload: res.data,
    });
  });
};

//sort place by views
export const sortPlacesViews = (placeItems, sort) => (dispatch) => {
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
export const getPlace = (placeId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/place/${placeId}`)
    .then((res) => {
      dispatch({
        type: SET_PLACE,
        payload: res.data,
      });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch((err) => {
      console.log(err);
    });
};

//post place
export const postPlace = (placeData, callback) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post('/place', placeData)
    .then((res) => {
      dispatch({
        type: POST_PLACE,
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
export const updatePlace = (placeId, placeData, callback) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post(`/place/${placeId}/update`, placeData)
    .then((res) => {
      dispatch({
        type: UPDATE_PLACE,
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
export const likePlace = (placeId) => (dispatch) => {
  axios
    .get(`/place/${placeId}/like`)
    .then((res) => {
      dispatch({
        type: LIKE_PLACE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//unlike place
export const unLikePlace = (placeId) => (dispatch) => {
  axios
    .get(`/place/${placeId}/unlike`)
    .then((res) => {
      dispatch({
        type: UNLIKE_PLACE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//mark available place
export const markAvailable = (placeId) => (dispatch) => {
  axios
    .get(`/place/${placeId}/available`)
    .then((res) => {
      dispatch({
        type: MARK_AVAILABLE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//mark unavailable place
export const markUnavailable = (placeId) => (dispatch) => {
  axios
    .get(`/place/${placeId}/unavailable`)
    .then((res) => {
      dispatch({
        type: MARK_UNAVAILABLE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//save place
export const savePlace = (placeId) => (dispatch) => {
  axios
    .get(`/place/${placeId}/save`)
    .then((res) => {
      dispatch({
        type: SAVE_PLACE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//unlike place
export const unSavePlace = (placeId) => (dispatch) => {
  axios
    .get(`/place/${placeId}/unsave`)
    .then((res) => {
      dispatch({
        type: UNSAVE_PLACE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//submitcomment
export const submitComment = (placeId, commentData) => (dispatch) => {
  axios
    .post(`/place/${placeId}/comment`, commentData)
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

export const reportPost = (placeId, reportData) => (dispatch) => {
  axios
    .post(`/place/${placeId}/report`, reportData)
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

export const deletePlace = (placeId) => async (dispatch) => {
  await axios.delete(`/place/${placeId}`);
  dispatch({
    type: DELETE_PLACE,
    payload: placeId,
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
        type: SET_PLACES,
        payload: res.data.places,
      });
    })
    .catch(() => {
      dispatch({
        type: SET_PLACES,
        payload: null,
      });
    });
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
