import * as ActionTypes from '../action/types'

export default function error (state='', action) {
    switch (action.type) {
        case ActionTypes.GET_ERROR:
            return 'Connection error. Try later please.';
        case ActionTypes.CLEAR_ERROR:
            return ''
        default: 
            return state;
    }
}