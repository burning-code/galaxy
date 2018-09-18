import React, { Component } from 'react'
import { NoteBL } from '../../../helpers'
import defaultAvatar from '../../../../skin/image/default_avatar.png'

class NoteList extends Component {
    render() {
        return (
            <ul className="note-list">
                { this.renderNoteRow() }
            </ul>
        );
    }

    /* TODO
     * 1. change to note.user.avatar && note.user.dispalyName
     * 2. Pass isAuthor from parent
     */
    renderNoteRow() {
        const { notes, editNote } = this.props;
        const isAuthor = true;

        return notes.map(note =>(
            <li key={note.id}>
                <p>
                    <img alt="" src={defaultAvatar} />
                    Jared Li
                    <span className="created-time">{ NoteBL.formatNoteCreatedTime(note.created)}</span>
                </p>
                <p>{note.text}</p>
                { editNote && isAuthor && <p><button className="link" onClick={e => editNote(note)}>Edit</button></p> }
            </li>
        ));
    }
}

export default NoteList