import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import * as CustomerAction from './CustomerAction'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

/*
 * TODO implement other test cases
 */

describe('Test - CustomerAction', () => {
    it('should create an action to update columns', () => {
        const expectedAction = {
            type: CustomerAction.UPDATE_COLUMNS,
            columns: CustomerAction.COLUMNS
        };
        expect(CustomerAction.updateColumns()).toEqual(expectedAction)
    })


});

describe('Test - CustomerAction - async actions', () => {
    let store;
    const fakeCustomerInfo = {
        "id": 1,
        "name": "Mercury",
        "address": "335 Milky Way",
        "phone": "02102110211",
        "email": "mercury@milkyway.com",
        "status": "NON_ACTIVE",
        "created": 1534442400
    };

    beforeEach(() => {
        store = mockStore({
            customers:{
                items: [],
                selected: null,
                showCustomerDetail: false,
                isFetching: false,
                pagination: CustomerAction.DEFAULT_PAGINATION,
                sorts: CustomerAction.DEFAULT_SORTS,
                filters: {},
                columns: CustomerAction.COLUMNS
            }
        });
    });

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore()
    });

    it('creates RECEIVE_CUSTOMER when fetching todos has been done', () => {


        fetchMock.patchOnce('/api/customers/1', {
            body: fakeCustomerInfo,
            headers: { 'content-type': 'application/json' }
        });

        const expectedActions = [{
            type: CustomerAction.RECEIVE_CUSTOMER,
            customer: fakeCustomerInfo
        }];

        return store.dispatch(CustomerAction.setCustomerStatus(1, 'NON_ACTIVE')).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
});