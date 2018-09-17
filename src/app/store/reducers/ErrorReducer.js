import {
    ADD_ERROR,
    CLEAR_ERRORS
} from '../actions/ErrorAction'
import { ErrorPool } from '../../core'

function errorsReducer(state = {
    [ErrorPool.STATUS.SYSTEM_ERROR]: [],
    [ErrorPool.STATUS.ERROR]: [],
}, action) {
    switch (action.type) {
        case ADD_ERROR:
            return {
                ...state,
                [action.status]: [
                    ...state[action.status],
                    action.message
                ]
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                [ErrorPool.STATUS.ERROR]: []
            };
        default:
            return state
    }
}

export default errorsReducer;

