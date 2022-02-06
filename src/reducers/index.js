import { combineReducers } from 'redux';
import postReducer from './postReducers';
import fetchCommentsReducer from './fetchCommentsReducer';
import fetchUserReducer from './fetchUserReducer';

//combined all reducers

export default combineReducers({
    posts: postReducer,
    users: fetchUserReducer,
    comments: fetchCommentsReducer
});