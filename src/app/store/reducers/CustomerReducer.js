import {
    RECEIVE_CUSTOMER,
    REQUEST_CUSTOMERS,
    RECEIVE_CUSTOMERS,
    UPDATE_SELECTED_CUSTOMER,
    DEFAULT_PAGINATION,
    DEFAULT_SORTS,
    UPDATE_COLUMNS,
    COLUMNS,
    SHOW_CUSTOMER_DETAIL
} from '../actions/CustomerAction'

function receiveCustomer(state = [], action) {
    if(action.type === RECEIVE_CUSTOMER) {
        return state.map((customer) => {
            if (customer.id === action.customer.id) {
                return action.customer
            }
            return customer
        });
    }

    return state;
}

function customerReducer(
    state = {
        items: [],
        selected: null,
        showCustomerDetail: false,
        isFetching: false,
        pagination: DEFAULT_PAGINATION,
        sorts: DEFAULT_SORTS,
        filters: {},
        columns: COLUMNS
    },
    action
) {
    switch (action.type) {
        case REQUEST_CUSTOMERS:
            return {
                ...state,
                pagination: action.pagination,
                sorts: action.sorts,
                filters: action.filters,
                isFetching: true
            };
        case RECEIVE_CUSTOMERS:
            return {
                ...state,
                isFetching: false,
                items: action.customers,
                pagination: action.pagination,
                sorts: action.sorts,
                filters: action.filters,
                lastUpdated: action.receivedAt
            };
        case RECEIVE_CUSTOMER:
            return {
                ...state,
                items: receiveCustomer(state.items, action)
            };
        case UPDATE_SELECTED_CUSTOMER:
            return {
                ...state,
                selected: action.selected
            };
        case UPDATE_COLUMNS:
            return {
                ...state,
                columns: action.columns
            };
        case SHOW_CUSTOMER_DETAIL:
            return {
                ...state,
                showCustomerDetail: action.show
            };
        default:
            return state
    }
}

export default customerReducer