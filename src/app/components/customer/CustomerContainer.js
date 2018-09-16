import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Pagination} from '../common'
import {CustomerAction, NoteAction} from '../../store'
import CustomersGrid from './CustomersGrid'
import CustomersFilter from './CustomersFilter'
import Customer from './Customer'
import CustomerNotesContainer from "./CustomerNotesContainer";

class CustomersContainer extends Component {

    componentDidMount() {
        const { dispatch, pagination, sorts, filters } = this.props;
        dispatch(CustomerAction.fetchCustomers(pagination, sorts, filters))
    }

    render() {
        const { selectedCustomer, items: customers, columns, pagination, sorts, filters } = this.props;

        return (
            <div>
                <div>
                    <CustomersFilter
                        filters={filters}
                        handleFilterCustomers={this.handleFilterCustomers}
                    />
                </div>
                <div>
                    <CustomersGrid
                        sorts={sorts}
                        columns={columns}
                        customers={customers}
                        selectedCustomer={selectedCustomer}
                        handleSelectCustomer={this.handleSelectCustomer}
                        handleSortCustomers={this.handleSortCustomers}
                    />
                    <Pagination pagination={pagination} handlePagination={this.handlePagination} size={5}/>
                </div>
                <div>
                    <Customer
                        customer={selectedCustomer}
                        handleChangeCustomerStatus={this.handleChangeCustomerStatus}
                    />
                    <CustomerNotesContainer customer={selectedCustomer}/>
                </div>
            </div>
        )
    }

    handleChangeCustomerStatus = (customer, nextStatus) => {
        const { dispatch } = this.props;
        const {id, status} = customer;

        if(nextStatus !== status) {
            dispatch(CustomerAction.setCustomerStatus(id, nextStatus))
        }
    };

    handleSelectCustomer = (customerId) => {
        const { dispatch, selectedCustomer } = this.props;
        if(!selectedCustomer || customerId !== selectedCustomer.id) {
            dispatch(CustomerAction.selectCustomer(customerId));
            dispatch(NoteAction.fetchNotes(customerId, NoteAction.DEFAULT_PAGINATION))
        }
    };

    handlePagination = (pagination) => {
        const { dispatch, sorts, filters } = this.props;
        dispatch(CustomerAction.fetchCustomers(pagination, sorts, filters));
    };

    handleSortCustomers = (sorts) => {
        const { dispatch, filters } = this.props;
        const {fetchCustomers, DEFAULT_PAGINATION} = CustomerAction;
        dispatch(fetchCustomers(DEFAULT_PAGINATION, sorts, filters));
    };

    handleFilterCustomers = (filters) => {
        const { dispatch, sort } = this.props;
        const {fetchCustomers, DEFAULT_PAGINATION} = CustomerAction;
        dispatch(fetchCustomers(DEFAULT_PAGINATION, sort, filters));
    }
}

function mapStateToProps(state) {
    const {
        items,
        selected: selectedCustomer,
        columns,
        filters,
        sorts,
        pagination,
        isFetching
    } = state.customers;

    return {
        items,
        selectedCustomer,
        columns,
        filters,
        sorts,
        pagination,
        isFetching
    };
}

export default connect(mapStateToProps)(CustomersContainer)