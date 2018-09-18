import React, { Component } from 'react'
import Popup from '../Popup'

class EditNotePopup extends Component {
    render() {
        const { note, cancel } = this.props;
        return note ? (
            <Popup
                className="edit-note-popup"
                title="Edit Note"
                closeButtonText="Cancel"
                saveButtonText="Save"
                save={this.save}
                cancel={cancel}
            >
                <textarea ref={node => this.noteText = node} defaultValue={note.text} />
            </Popup>
        ) : null;
    }

    /*
     * TODO the check content logic part should be move to CustomerNotesContainer so it could be shared with AddNotePanel
     */
    save = () => {
        const { save, note } = this.props;
        const noteText = this.noteText.value.trim();
        if(noteText !== '') {
            save({
                ...note,
                text: noteText
            });
        } else {
            // TODO warning empty message can't be submitted
        }
    }
}

export default EditNotePopup