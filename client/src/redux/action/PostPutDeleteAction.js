import { postPost, postComment, deletePost, updatePost } from '../api/api'
import * as actionTypes from './types';

export const createPost = (post) => dispatch => {
    return postPost(post)
        .then(res => dispatch(addNewPostToStore(post, res.data)))
        .catch(() => dispatch(addCreatePostErrorToStore()))
}
export function addNewPostToStore(post, res) {
    return {
        type: actionTypes.POST_POST,
        payload: {...post, _id: res._id}
    }
}
export function addCreatePostErrorToStore() {
    return {
        type: actionTypes.GET_ERROR,
    }
}

export const createComment = (id, post) => dispatch => {
    return postComment(id, post)
        .then(data => console.log(data))
        // .then(res => dispatch(addPostsToStore(res.data)))
        // .catch(() => dispatch(addCreateCommentErrorToStore()))
        .catch((err) => console.log(err))
}
export function addCreateCommentErrorToStore() {
    return {
        type: actionTypes.GET_ERROR,
    }
}

export const putPost = (id, post) => dispatch => {
    return updatePost(id, post)
        // .then(data => console.log(data))
        .then(() => dispatch(updatePostInStore(post)))
        .catch(() => dispatch(addUpdatePostErrorToStore()))
}
export function updatePostInStore(post) {
    return {
        type: actionTypes.UPDATE_POST,
        payload: post
    }
}
export function addUpdatePostErrorToStore() {
    return {
        type: actionTypes.GET_ERROR,
    }
}


export const removePost = (id) => dispatch => {

    return deletePost(id)
        // .then(data => console.log(data))
        // .then(res => dispatch(addPostsToStore(res.data)))
        .then(() => dispatch(deletePostFromDb(id)))
        .catch(() => dispatch(addDeletePostErrorToStore()))
}

export function deletePostFromDb(id) {
    return {
        type: actionTypes.DELETE_POST,
        payload:{id}
    }
}

export function addDeletePostErrorToStore() {
    return {
        type: actionTypes.GET_ERROR,
    }
}