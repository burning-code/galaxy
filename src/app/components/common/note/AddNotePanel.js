import React, {Component} from 'react'

class AddNotePanel extends Component {
    render() {
        return (
            <div className="add-note-panel">
                <textarea ref={node => this.noteText = node} />
                <button onClick={e => this.handleClearDraft()}>Clear</button>
                <button onClick={e => this.handleAddNote()}>Submit</button>
            </div>
        );
    }

    handleClearDraft = () => {
        this.noteText.value = "";
    };

    /*
     * TODO the check content logic part should be move to CustomerNotesContainer so it could be shared with EditNotePopup
     */
    handleAddNote = () => {
        const { handleAddNote } = this.props;
        const noteText = this.noteText.value.trim();
        if(noteText !== '') {
            handleAddNote({
                text: noteText
            });
            this.noteText.value = "";
        } else {
            // TODO warning empty message can't be submitted
        }
    }
}

export default AddNotePanel