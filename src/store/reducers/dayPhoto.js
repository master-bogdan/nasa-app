import { FETCH_DAY_PHOTO } from '../actions/actionTypes';

const initialState = {
    data: null
}

export default function dayPhotoReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_DAY_PHOTO:
            return {
                ...state
            };
        default:
            return state;
    }
    
}