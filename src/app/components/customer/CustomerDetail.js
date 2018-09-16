import React, {Component} from 'react'
import CustomerStatusSelector from './CustomerStatusSelector'

class Customer extends Component {
    render() {
        const {customer, handleChangeCustomerStatus} = this.props;

        return (
            customer && (
                <div>
                    <CustomerStatusSelector
                        customer={customer}
                        handleChangeCustomerStatus={handleChangeCustomerStatus}
                    />
                </div>
            )
        );
    }
}

export default Customer