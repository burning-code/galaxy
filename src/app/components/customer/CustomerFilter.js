import React, {Component} from 'react'
import {CustomerBL} from "../../helpers";

const ALL = 'ALL';

class Customer extends Component {
    render() {
        return (
            <div>
                {this.renderStatusFilter()}
            </div>
        );
    }

    renderStatusFilter() {
        const {filters} = this.props;
        return (
            <select
                onChange={e => this.handleFilterCustomers({key: 'status', value: e.target.value})}
                value={filters['status'] || ALL}
            >
                { this.renderStatusOptions() }
            </select>
        );
    }

    renderStatusOptions() {
        let options = Object
            .entries({
                ...CustomerBL.CustomerStatus,
                [ALL]: ALL
            })
            .map(([key, status]) => (
                <option key={status} value={status}>{CustomerBL.getCustomerStatusText(status)}</option>
            ));
        return options;
    }

    handleFilterCustomers = ({key, value}) => {
        const {handleFilterCustomers, filters} = this.props;
        if(value === ALL) {
            delete filters[key];
            handleFilterCustomers(filters)
        } else {
            handleFilterCustomers({
                ...filters,
                [key]: value
            });
        }
    }
}

export default Customer