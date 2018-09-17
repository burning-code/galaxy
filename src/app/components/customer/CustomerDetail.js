import React, {Component} from 'react'
import {connect} from 'react-redux'
import {_, moment} from '../../core'
import CustomerStatusSelector from './CustomerStatusSelector'
import CustomerNotesContainer from './CustomerNotesContainer'
import {CustomerAction, NoteAction} from '../../store'


class CustomerDetail extends Component {
    componentDidMount() {
        const customerId = this.props.match.params.customerId;

        if(customerId) {
            this.loadSelectedCustomer(customerId);
        }
    }

    componentWillUnmount() {
        this.unloadSelectedCustomer();
    }

    componentWillReceiveProps(newProps) {
        const customerId = parseInt(newProps.match.params.customerId, 10);
        const { customer } = this.props;

        if(customer && (customerId !== customer.id)) {
            this.loadSelectedCustomer(customerId);
        }
    }

    render() {
        const { customer } = this.props;

        return (
            customer && !_.isEmpty(customer) ? (
                <div className="customer-detail">
                    <div className="customer-detail-header">
                        {customer.name}
                        <span className="close" onClick={() => this.unloadSelectedCustomer()} />
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
                                    handleChangeCustomerStatus={this.handleChangeCustomerStatus}
                                />
                            </div>
                        </div>
                        <h5>Notes</h5>
                        <CustomerNotesContainer />
                    </div>
                </div>
            ) : null
        );
    }

    handleChangeCustomerStatus = (customer, nextStatus) => {
        const { dispatch } = this.props;
        const { id, status } = customer;

        if(nextStatus !== status) {
            dispatch(CustomerAction.setCustomerStatus(id, nextStatus))
        }
    };

    loadSelectedCustomer = (customerId) => {
        const { dispatch } = this.props;
        dispatch(CustomerAction.selectCustomer(customerId));
        dispatch(NoteAction.fetchNotes(customerId));
    };

    unloadSelectedCustomer = () => {
        const { dispatch, history } = this.props;
        const { updateSelectedCustomer, updateColumns, showCustomerDetail} = CustomerAction;
        dispatch(updateSelectedCustomer());
        dispatch(updateColumns());
        dispatch(showCustomerDetail(false));
        history.push('/customer');
    };
}

function mapStateToProps(state) {
    const {
        selected: customer,
        showCustomerDetail
    } = state.customers;

    return {
        customer,
        showCustomerDetail
    };
}

export default connect(mapStateToProps)(CustomerDetail)