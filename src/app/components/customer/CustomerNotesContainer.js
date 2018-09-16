import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NoteAction } from '../../store/index'
import {Pagination, AddNotePanel, NoteList} from '../common'

class CustomerNotesContainer extends Component {

    handleAddNote = (note) => {
        const { dispatch , customer} = this.props;
        dispatch(NoteAction.addNote({
            ...note,
            customerId: customer.id,
            authorId: 1,
            created: Date.now()
        }))
    };

    handlePagination = (pagination) => {
        const { dispatch, customer } = this.props;
        dispatch(NoteAction.fetchNotes(customer.id, pagination));
    };

    render() {
        const {customer, items: notes, pagination } = this.props;

        return (
            <div className="notes-container">
                <AddNotePanel customerId={customer.id} handleAddNote={this.handleAddNote}/>
                <NoteList notes={notes} />
                <div className="pagination-wrapper">
                    <Pagination pagination={pagination} handlePagination={this.handlePagination} size={5}/>
                </div>
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

    return {
        items,
        pagination,
        isFetching
    };
}

export default connect(mapStateToProps)(CustomerNotesContainer)