import React, {Component} from 'react'

class AddNotePanel extends Component {
    render() {
        return (
            <div className="add-note-panel">
                <textarea ref={node => this.note = node}>

                </textarea>
                <button onClick={e => this.handleClearDraft()}>Clear</button>
                <button onClick={e => this.handleAddNote()}>Submit</button>
            </div>
        );
    }

    handleClearDraft = () => {
        this.note.value = "";
    };

    handleAddNote = () => {
        const {handleAddNote} = this.props;
        const note = this.note.value;
        if(note.trim() !== '') {
            handleAddNote({
                text: this.note.value
            });
            this.note.value = "";
        }
    }
}

export default AddNotePanel