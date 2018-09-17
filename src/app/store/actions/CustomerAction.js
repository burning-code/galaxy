import {get, patch} from '../../core'
import { addError } from './ErrorAction';

/*
 * action types
 */

export const UPDATE_SELECTED_CUSTOMER = 'UPDATE_SELECTED_CUSTOMER';
export const RECEIVE_CUSTOMER = 'RECEIVE_CUSTOMER';
export const REQUEST_CUSTOMERS = 'REQUEST_CUSTOMERS';
export const RECEIVE_CUSTOMERS = 'RECEIVE_CUSTOMERS';
export const UPDATE_COLUMNS = 'UPDATE_COLUMNS';
export const SHOW_CUSTOMER_DETAIL = 'SHOW_CUSTOMER_DETAIL';

/*
 * other constants
 */

export const DEFAULT_PAGINATION = {
    _page: 1,
    _limit: 10
};

export const DEFAULT_SORTS = {
    _sort: 'created,id',
    _order: 'desc,desc'
};

export const COLUMNS = [
    'name',
    'status',
    'created'
];

export const COLUMNS_NARROW = [
    'name',
    'status'
];

/*
 * action creators
 */

export function updateColumns(columns = COLUMNS) {
    return {
        type: UPDATE_COLUMNS,
        columns
    }
}

export function setCustomerStatus(customerId, status) {
    return (dispatch, getState) => {
        let selectedCustomer = getState().customers.selected;
        return patch(`/customers/${customerId}`,{
            id: customerId,
            status
        }).then(resp => {
            const { data: customer } = resp;
            dispatch(receiveCustomer(customer));

            /*
             * In case the function be called out of customer details
             */
            if(selectedCustomer != null && selectedCustomer.id === customer.id) {
                dispatch(updateSelectedCustomer(customer))
            }
        }, error => dispatch(addError(error)));
    }
}

export function showCustomerDetail(show) {
    return {
        type: SHOW_CUSTOMER_DETAIL,
        show
    }
}

export function updateSelectedCustomer(selected = null) {
    return {
        type: UPDATE_SELECTED_CUSTOMER,
        selected
    }
}

function receiveCustomer(customer) {
    return {
        type: RECEIVE_CUSTOMER,
        customer
    };
}

export function selectCustomer(customerId) {
    return dispatch => {
        return get(`/customers/${customerId}`).then(resp => {
                dispatch(receiveCustomer(resp.data));
                dispatch(updateSelectedCustomer(resp.data));
                dispatch(updateColumns(COLUMNS_NARROW));
                dispatch(showCustomerDetail(true))
            }, error => dispatch(addError(error)))
    }
}

function requestCustomers(pagination, sorts, filters) {
    return {
        type: REQUEST_CUSTOMERS,
        pagination,
        sorts,
        filters
    }
}

function receiveCustomers(customers, pagination, sorts, filters) {
    return {
        type: RECEIVE_CUSTOMERS,
        customers,
        pagination,
        sorts,
        filters,
        receivedAt: Date.now()
    }
}

export function fetchCustomers(pagination, sorts, filters) {
    return dispatch => {
        dispatch(requestCustomers(pagination, sorts, filters));
        return get(`/customers`, {
            ...pagination,
            ...sorts,
            ...filters
        }).then(resp => {
            dispatch(receiveCustomers(resp.data, {
                ...pagination,
                _total: resp.total
            }, sorts, filters))
        }, error => dispatch(addError(error)))
    }
}

