import axios from 'axios';

export function getPosts() {
    return axios.get(`http://localhost:8000/api/posts/`)
}

export function getSinglePost(id) {
    return axios.get(`http://localhost:8000/api/posts/${id}`)
}

export function postPost(obj) {
    return axios.post('http://localhost:8000/api/posts/', obj, {
        headers: {
            'Content-Type': 'application/json',
        }
      })
}

export function postComment(id, obj) {
    // console.log(id, obj)
    return axios.post(`http://localhost:8000/api/posts/${id}/comments`, obj, {
        headers: {
            'Content-Type': 'application/json',
        } 
    })
}

export function updatePost(id, obj){
    return axios.put(`http://localhost:8000/api/posts/${id}`, obj, {
        headers: {
            'Content-Type': 'application/json',
        } 
    })
}

export function deletePost(id){
    return axios.delete(`http://localhost:8000/api/posts/${id}`)
}