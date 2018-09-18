import {
    EDIT_NOTE,
    RECEIVE_NOTES,
    DEFAULT_PAGINATION
} from '../actions/NoteAction'

function notesReducer(state = {
    customerId: null,
    items: [],
    isFetching: false,
    pagination: DEFAULT_PAGINATION,
    editingNote: null
}, action) {
    switch (action.type) {
        case EDIT_NOTE:
            return {
                ...state,
                editingNote: action.note
            };
        case RECEIVE_NOTES:
            return {
                ...state,
                isFetching: false,
                customerId: action.customerId,
                items: action.notes,
                pagination: action.pagination,
                lastUpdated: action.receivedAt
            };
        default:
            return state
    }
}

export default notesReducer;

