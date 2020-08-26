import { combineReducers } from 'redux';
import dayPhotoReducer from './dayPhoto';

export default combineReducers({
    photo: dayPhotoReducer
});
