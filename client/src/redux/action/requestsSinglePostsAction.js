import { getSinglePost } from '../api/api'
import * as actionTypes from './types';

export const requestSinglePost = (id) => dispatch => {
    return getSinglePost(id)
        .then(res => dispatch(addSinglePostToStore(res.data)))
        .catch(() => dispatch((addSinglePostErrorToStore())))
}

export function addSinglePostToStore(res) {
    return {
        type: actionTypes.GET_SINGLE_POST,
        payload: res,
    }
}
export function addSinglePostErrorToStore() {
    return {
        type: actionTypes.GET_ERROR,
    }
}


export function addCommentToPost(comment) {
    return {
        type: actionTypes.ADD_COMMENT,
        payload: comment,
    }
}