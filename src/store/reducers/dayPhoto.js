import { FETCH_DAY_PHOTO, SHOW_LOADING } from '../actions/actionTypes';

const initialState = {
    photoData: [],
    loading: false
}

export default function dayPhotoReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_DAY_PHOTO:
            return {
                ...state,
                photoData: action.payload,
                loading: false
            };
        case SHOW_LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
    
}