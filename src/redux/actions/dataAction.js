import {
  SET_PLACES,
  SET_PLACE,
  POST_PLACE,
  LOADING_DATA,
  LIKE_PLACE,
  UNLIKE_PLACE,
  DELETE_PLACE,
  CLEAR_ERRORS,
  SET_ERRORS,
  LOADING_UI,
  STOP_LOADING_UI,
  SUBMIT_COMMENT,
} from '../types';
import axios from 'axios';

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
    .catch((err) => console.log(err));
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
        payload: err.response.data,
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
        payload: err.response.data,
      });
    });
};

export const deletePlace = (placeId) => (dispatch) => {
  axios
    .delete(`/place/${placeId}`)
    .then(() => {
      dispatch({
        type: DELETE_PLACE,
        payload: placeId,
      });
    })
    .catch((err) => console.log(err));
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
