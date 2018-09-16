import React, {Component} from 'react'

class NoteList extends Component {
    render() {
        return (
            <ul>
                {this.renderNoteRow()}
            </ul>
        );
    }

    renderNoteRow() {
        const {notes} = this.props;

        return notes.map(note =><li key={note.id}>{note.text}</li>);
    }
}

export default NoteList