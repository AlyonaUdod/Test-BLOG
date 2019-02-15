import * as ActionTypes from '../action/types'

export default function posts (state={}, action) {
    switch (action.type) {
        case ActionTypes.GET_SINGLE_POST:
            return action.payload;
        case ActionTypes.ADD_COMMENT:
            return {...state, comments: [...action.payload, action.post]};
        default: 
            return state;
    }
}