import { FETCH_DAY_PHOTO, SHOW_LOADING } from './actionTypes';

export function showLoading() {
    return {
        type: SHOW_LOADING
    }
}

export function fetchPhoto() {
    return dispatch => {
        dispatch(showLoading());
        fetch("https://api.nasa.gov/planetary/apod?api_key=pOWSgSWWiU2HNQSa6cnHqRsC2ZbACaxIwlz4HY6p")
        .then(data => data.json())
        .then(data => dispatch({
            type: FETCH_DAY_PHOTO,
            payload: data
        }))
        .catch(err => console.log(err));
    }
}