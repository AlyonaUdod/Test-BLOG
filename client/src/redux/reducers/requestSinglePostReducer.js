import * as ActionTypes from '../action/types'

export default function posts (state={}, action) {
    switch (action.type) {
        case ActionTypes.GET_SINGLE_POST:
            return action.payload;
        case ActionTypes.ADD_COMMENT:
            return {...state, comments: [...state.comments, action.payload]};
        default: 
            return state;
    }
}