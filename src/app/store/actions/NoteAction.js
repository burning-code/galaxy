import {get, post} from "../../core"

/*
 * action types
 */

export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const REQUEST_NOTES = 'REQUEST_NOTES';
export const RECEIVE_NOTES = 'RECEIVE_NOTES';

/*
 * other constants
 */

export const DEFAULT_PAGINATION = {
    _page: 1,
    _limit: 5
};

/*
 * action creators
 */

export function addNote(note) {
    return (dispatch) => {
        return post(`/notes`, note).then(
            () => {
                dispatch(fetchNotes(note.customerId, DEFAULT_PAGINATION));
            }
        );
    }
}

function requestNotes(customerId, pagination) {
    return {
        type: REQUEST_NOTES,
        customerId,
        pagination
    }
}

function receiveNotes(customerId, notes, pagination) {
    return {
        type: RECEIVE_NOTES,
        customerId,
        notes,
        pagination,
        receivedAt: Date.now()
    }
}

export function fetchNotes(customerId, pagination) {
    return dispatch => {
        dispatch(requestNotes(customerId, pagination));
        return get(`/notes`, {
            customerId,
            ...pagination,
            _sort: 'created,id',
            _order: 'desc,desc'
        }).then(
            resp => {
                dispatch(receiveNotes(customerId, resp.data, {
                    ...pagination,
                    _total: resp.total
                }))
            }
        )
    }
}