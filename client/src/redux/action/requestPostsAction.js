import { getPosts } from '../api/api'
import * as actionTypes from './types';

export const requestPosts = (num) => dispatch => {
    return getPosts(num)
    // .then(data => console.log(data.data))
    .then(res => dispatch(addPostsToStore(res.data)))
    .catch(() => dispatch(addPostsErrorToStore()))
}
export function addPostsToStore(res) {
    return {
        type: actionTypes.GET_POSTS,
        payload: res,
    }
}
export function addPostsErrorToStore() {
    return {
        type: actionTypes.GET_ERROR,
    }
}