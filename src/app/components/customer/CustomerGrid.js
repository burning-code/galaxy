import React, {Component} from 'react'
import {CustomerBL} from '../../helpers'
import moment from 'moment'

class CustomersGrid extends Component {
    render() {
        const {selectedCustomer, customers} = this.props;

        return (
            this.showCustomers() ? (
                <div className="customers-grid">
                    <table>
                        <thead>
                            {this.renderCustomerHeader()}
                        </thead>
                        <tbody>
                            {this.renderCustomerRow(customers, selectedCustomer)}
                        </tbody>
                    </table>
                </div>
            ) : <div>There is not any customers, click here to create.</div>
        );
    }

    showCustomers() {
        return this.props.customers.length !== 0;
    }

    renderCustomerHeader() {
        const {columns} = this.props;

        return (
            <tr>
                {
                    columns.map(column => (
                        <th onClick={e => this.handleSortCustomers(column)}>{column}</th>
                    ))
                }
                <th>Action</th>
            </tr>
        );
    }

    renderCustomerRow(customers, selectedCustomer) {
        return customers.map(customer => (
            <tr key={customer.id}
                onClick={e => this.props.handleSelectCustomer(customer.id)}
            >
                <td>{customer.name}</td>
                <td>{CustomerBL.getCustomerStatusText(customer.status)}</td>
                <td>{moment(customer.created).format('MM/DD/YYYY HH:mm')}</td>
                <td><a href="#">Edit</a>&nbsp;&nbsp;<a href="#">Delete</a></td>
            </tr>
        ));
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


}

export default CustomersGrid