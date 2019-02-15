import * as ActionTypes from '../action/types'

export default function posts (state=[], action) {
    switch (action.type) {
        case ActionTypes.GET_POSTS:
            return action.payload;
        case ActionTypes.DELETE_POST:
            return state.filter(el => el._id !== action.payload.id)
        case ActionTypes.POST_POST: 
            return [...state, action.payload]
        case ActionTypes.UPDATE_POST: 
            return state.map(el => el._id === action.payload._id ? action.payload : el) 
        default: 
            return state;
    }
}