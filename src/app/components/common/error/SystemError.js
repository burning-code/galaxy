import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ErrorPool } from '../../../core'

class SystemError extends Component {
    render() {
        const { errors } = this.props;

        return errors && errors.length !== 0 ? (
            <div className="system-error">
                <div className="system-error-heading">
                    System Error
                </div>
                <div className="system-error-body">
                    {this.renderErrorMessage()}
                </div>
            </div>
        ) : null;
    }

    renderErrorMessage() {
        const { errors } = this.props;

        return errors.map(error => {
            return <p>{error}</p>;
        });
    }
}

function mapStateToProps(state) {

    return {
        errors: state.errors[ErrorPool.STATUS.SYSTEM_ERROR]
    };
}

export default connect(mapStateToProps)(SystemError)