import { combineReducers } from 'redux';

import posts from './requestPostsReducer'
import error from './errorReducer'
import post from './requestSinglePostReducer'

const rootReducer = combineReducers({
    posts,
    error,
    post,
})

export default rootReducer;
