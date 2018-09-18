import * as CustomerBL from './CustomerBL'

describe('Test - CustomerBL', () => {
    test('testing getCustomerStatusText(status)', () => {
        expect.assertions(4);

        expect(CustomerBL.getCustomerStatusText(CustomerBL.CustomerStatus.PROSPECTIVE)).toEqual('Prospective');
        expect(CustomerBL.getCustomerStatusText(CustomerBL.CustomerStatus.CURRENT)).toEqual('Current');
        expect(CustomerBL.getCustomerStatusText(CustomerBL.CustomerStatus.NON_ACTIVE)).toEqual('Non-active');
        expect(CustomerBL.getCustomerStatusText()).toEqual('All');
    });
});

