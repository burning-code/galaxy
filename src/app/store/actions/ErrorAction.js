/*
 * action types
 */

export const ADD_ERROR = 'ADD_ERROR';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

/*
 * action creators
 */

export function addError({status, message}) {
    return {
        type: ADD_ERROR,
        status,
        message
    }
}