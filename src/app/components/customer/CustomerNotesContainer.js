import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NoteAction } from '../../../store/index'
import NoteList from './NoteList'
import Pagination from '../Pagination'
import AddNotePanel from './AddNotePanel'

class NoteContainer extends Component {

    // componentDidMount() {
    //     const { dispatch, customer } = this.props;
    //     dispatch(NoteAction.fetchNotes(customer.id, NoteAction.DEFAULT_PAGINATION))
    // }

    handleAddNote = (note) => {
        const { dispatch , customerId} = this.props;
        dispatch(NoteAction.addNote({
            ...note,
            customerId
        }))
    };

    handlePagination = (pagination) => {
        const { dispatch, customerId } = this.props;
        dispatch(NoteAction.fetchNotes(customerId, pagination));
    };

    render() {
        const {customerId, items: notes, pagination } = this.props;

        return (
            <div>
                <AddNotePanel customerId={customerId} handleAddNote={this.handleAddNote}/>
                <NoteList notes={notes} />
                <Pagination pagination={pagination} handlePagination={this.handlePagination} size={5}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {
        items,
        pagination,
        isFetching
    } = state.notes;

    const {
        selected: customer
    } = state.customers;

    return {
        customer,
        items,
        pagination,
        isFetching
    };
}

export default connect(mapStateToProps)(NoteContainer)