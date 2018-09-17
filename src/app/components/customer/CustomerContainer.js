import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import {CustomerAction, NoteAction} from '../../store'
import CustomerGrid from './CustomerGrid'
import CustomerFilter from './CustomerFilter'
import CustomerDetail from './CustomerDetail'

class CustomerContainer extends Component {
    componentDidMount() {
        const { dispatch, pagination, sorts, filters } = this.props;
        dispatch(CustomerAction.fetchCustomers(pagination, sorts, filters))
    }

    render() {
        const { selectedCustomer, showCustomerDetail: narrow, items: customers, columns, pagination, sorts, filters } = this.props;

        return (
            <div className="customer-container">
                <CustomerFilter
                    filters={filters}
                    handleFilterCustomers={this.handleFilterCustomers}
                />
                <CustomerGrid
                    narrow={narrow}
                    sorts={sorts}
                    columns={columns}
                    customers={customers}
                    selectedCustomer={selectedCustomer}
                    pagination={pagination}
                    handleSelectCustomer={this.handleSelectCustomer}
                    handleSortCustomers={this.handleSortCustomers}
                    handlePagination={this.handlePagination}
                />
                <Route path="/customer/:customerId" component={CustomerDetail} />
            </div>
        )
    }


    handleSelectCustomer = (customerId) => {
        const { history, match, dispatch, selectedCustomer } = this.props;
        if(!selectedCustomer || selectedCustomer.id !== customerId) {
            dispatch(CustomerAction.selectCustomer(customerId));
            dispatch(NoteAction.fetchNotes(customerId));
            history.push(`${match.path}/${customerId}`)
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
        const { dispatch, sorts } = this.props;
        const { fetchCustomers, DEFAULT_PAGINATION } = CustomerAction;
        dispatch(fetchCustomers(DEFAULT_PAGINATION, sorts, filters));

        this.unloadSelectedCustomer();
    };

    unloadSelectedCustomer = () => {
        const { dispatch, history, match } = this.props;
        const { updateSelectedCustomer, updateColumns, showCustomerDetail} = CustomerAction;
        dispatch(updateSelectedCustomer());
        dispatch(updateColumns());
        dispatch(showCustomerDetail(false));
        history.push(match.path);
    };
}

function mapStateToProps(state) {
    const {
        items,
        selected: selectedCustomer,
        showCustomerDetail,
        columns,
        filters,
        sorts,
        pagination,
        isFetching
    } = state.customers;

    return {
        items,
        selectedCustomer,
        showCustomerDetail,
        columns,
        filters,
        sorts,
        pagination,
        isFetching
    };
}

export default connect(mapStateToProps)(CustomerContainer)