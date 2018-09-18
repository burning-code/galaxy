import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NoteAction } from '../../store/index'
import {Pagination, EditNotePopup, AddNotePanel, NoteList} from '../common'
import {_} from "../../core";

class CustomerNotesContainer extends Component {
    render() {
        const { customer, items: notes, pagination, editingNote } = this.props;

        return customer && !_.isEmpty(customer) && (
            <div className="notes-container">
                <AddNotePanel customerId={customer.id} handleAddNote={this.handleAddNote}/>
                <NoteList notes={notes} editNote={this.editNote} />
                <div className="pagination-wrapper">
                    <Pagination pagination={pagination} handlePagination={this.handlePagination} size={5}/>
                </div>
                <EditNotePopup
                    note={editingNote}
                    save={this.handleUpdateNote}
                    cancel={this.cancelEditNote}
                />
            </div>
        )
    }

    handleAddNote = (note) => {
        const { dispatch , customer} = this.props;
        dispatch(NoteAction.addNote({
            ...note,
            customerId: customer.id,
            authorId: 1,
            created: Date.now()
        }))
    };

    handleUpdateNote = (note) => {
        const { dispatch } = this.props;
        dispatch(NoteAction.updateNote({
            ...note,
            created: Date.now()
        }));
    };

    handlePagination = (pagination) => {
        const { dispatch, customer } = this.props;
        dispatch(NoteAction.fetchNotes(customer.id, pagination));
    };

    cancelEditNote = () => {
        const { dispatch } = this.props;
        dispatch(NoteAction.cancelEditNote());
    };

    editNote = (note) => {
        const { dispatch } = this.props;
        dispatch(NoteAction.editNote(note));
    }
}

function mapStateToProps(state) {
    const {
        items,
        pagination,
        isFetching,
        editingNote
    } = state.notes;

    const {
        selected: customer
    } = state.customers;

    return {
        customer,
        items,
        pagination,
        isFetching,
        editingNote
    };
}

export default connect(mapStateToProps)(CustomerNotesContainer)