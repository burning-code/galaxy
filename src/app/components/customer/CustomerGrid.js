import React, {Component} from 'react'
import {_, moment} from '../../core'
import {CustomerBL} from '../../helpers'
import {Pagination} from "../common";

class CustomerGrid extends Component {
    render() {
        const { selectedCustomer, customers, pagination, handlePagination, narrow } = this.props;

        return (
            this.showCustomers() ? (
                <div className={`customer-grid ${narrow ? 'narrow' : ''}`}>
                    <table className="table table-hover">
                        <thead>
                            {this.renderCustomerHeader(narrow)}
                        </thead>
                        <tbody>
                            {this.renderCustomerRow(customers, selectedCustomer, narrow)}
                        </tbody>
                    </table>
                    <div className="pagination-wrapper">
                        <Pagination pagination={pagination} handlePagination={handlePagination} size={5}/>
                    </div>
                </div>
            ) : <div>There is not any customers, click here to create.</div>
        );
    }

    showCustomers() {
        return this.props.customers.length !== 0;
    }

    renderCustomerHeader(narrow) {
        const {columns, sorts} = this.props;

        return (
            <tr>
                {
                    columns.map(column => (
                        <th className={sortBy(column)} key={column} onClick={e => this.handleSortCustomers(column)}>
                            {column}
                        </th>
                    ))
                }
                { narrow || (<th>Actions</th>) }
            </tr>
        );

        function sortBy(column) {
            if(sorts._sort === column) {
                return sorts._order;
            }
        }
    }

    renderCustomerRow(customers, selectedCustomer, narrow) {
        return customers.map(customer => (
            <tr key={customer.id} className={isActive(customer) ? 'active' : ''}
                onClick={e => this.props.handleSelectCustomer(customer.id)}
            >
                <td>{customer.name}</td>
                <td>{CustomerBL.getCustomerStatusText(customer.status)}</td>
                { narrow || (<td>{moment(customer.created).format('MM/DD/YYYY HH:mm')}</td>) }
                { narrow || this.renderAction(customer) }
            </tr>
        ));

        function isActive(customer) {
            return !_.isEmpty(selectedCustomer) && selectedCustomer.id === customer.id;
        }
    }

    renderAction(customer) {
        return (
            <td>
                <button onClick={e => this.handleEdit(e, customer)}>Edit</button>&nbsp;&nbsp;
                <button onClick={e => this.handleDelete(e, customer)}>Delete</button>
            </td>
        )
    }

    handleSortCustomers = (column) => {
        const {sorts, handleSortCustomers} = this.props;
        if(sorts._sort === column) {
            handleSortCustomers({
                ...sorts,
                _order: toggleOrder(sorts._order)
            })
        } else {
            handleSortCustomers({
                _sort: column,
                _order: 'asc'
            })
        }

        function toggleOrder(order) {
            return order === 'asc' ? 'desc' : 'asc'
        }
    };

    // TODO implement
    handleEdit(event, customer) {
        console.log('Edit', customer);
        event.stopPropagation();
    }

    // TODO implement
    handleDelete(event, customer) {
        console.log('Delete', customer);
        event.stopPropagation();
    }
}

export default CustomerGrid