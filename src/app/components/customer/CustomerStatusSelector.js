import React, {Component} from 'react'
import {CustomerBL} from '../../helpers'

class CustomerStatusSelector extends Component {
    render() {
        const {customer, handleChangeCustomerStatus} = this.props;

        return (
            <select onChange={e => handleChangeCustomerStatus(customer, e.target.value)} value={customer.status}>
                { this.renderOptions() }
            </select>
        );
    }

    renderOptions() {
        let options = Object
            .entries(CustomerBL.CustomerStatus).map(([key, status]) => (
                <option key={status} value={status}>{CustomerBL.getCustomerStatusText(status)}</option>
            ));
        return options;
    }
}

export default CustomerStatusSelector