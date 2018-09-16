import React, {Component} from 'react'
import defaultAvatar from '../../../../skin/image/default_avatar.png'

class NoteList extends Component {
    render() {
        return (
            <ul className="note-list">
                {this.renderNoteRow()}
            </ul>
        );
    }

    renderNoteRow() {
        const {notes} = this.props;

        return notes.map(note =>(
            <li key={note.id}>
                <p><img alt="" src={defaultAvatar} /> Jared Li<span className="created-time">09/13/2018</span></p>
                <p>{note.text}</p>
            </li>
        ));
    }
}

export default NoteList