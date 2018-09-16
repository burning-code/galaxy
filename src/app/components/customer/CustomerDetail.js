import React, {Component} from 'react'
import {_, moment} from '../../core'
import CustomerStatusSelector from './CustomerStatusSelector'
import CustomerNotesContainer from './CustomerNotesContainer'

class CustomerDetail extends Component {
    componentDidMount() {
        const {customer, loadSelectedCustomer, match} = this.props;
        if(!customer) {
            loadSelectedCustomer(match.params.customerId);
        }
    }

    render() {
        const {customer, handleChangeCustomerStatus} = this.props;

        return (
            customer && !_.isEmpty(customer) && (
                <div className="customer-detail">
                    <div className="customer-detail-header">
                        {customer.name}
                        <span className="close" onClick={() => this.handleClose()} />
                    </div>
                    <div className="customer-detail-body">
                        <div className="customer-detail-blocks">
                            <div className="customer-detail-block">
                                <label>Name</label>{customer.name}
                            </div>
                            {
                                customer.phone && (
                                    <div className="customer-detail-block">
                                        <label>Phone</label>{customer.phone}
                                    </div>
                                )
                            }
                            {
                                customer.mobile && (
                                    <div className="customer-detail-block">
                                        <label>Mobile</label>{customer.mobile}
                                    </div>
                                )
                            }
                            {
                                customer.email && (
                                    <div className="customer-detail-block">
                                        <label>Email</label>
                                        <a href={'mailto:'+customer.email}>{customer.email}</a>
                                    </div>
                                )
                            }
                            {
                                customer.address && (
                                    <div className="customer-detail-block">
                                        <label>Address</label>{customer.address}
                                    </div>
                                )
                            }
                            <div className="customer-detail-block">
                                <label>Created</label>{moment(customer.created).format('MM/DD/YYYY HH:mm')}
                            </div>
                            <div className="customer-detail-block">
                                <label>Status</label>
                                <CustomerStatusSelector
                                    customer={customer}
                                    handleChangeCustomerStatus={handleChangeCustomerStatus}
                                />
                            </div>
                        </div>
                        <h5>Notes</h5>
                        <CustomerNotesContainer customer={customer}/>
                    </div>
                </div>
            )
        );
    }

    handleClose() {
        const { unloadSelectedCustomer } = this.props;
        unloadSelectedCustomer();
    }
}

export default CustomerDetail