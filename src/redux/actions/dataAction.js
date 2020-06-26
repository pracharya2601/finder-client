import {
  SET_PLACES,
  LOADING_DATA,
  LIKE_PLACE,
  UNLIKE_PLACE,
  DELETE_PLACE,
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
