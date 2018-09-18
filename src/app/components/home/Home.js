import React, {Component} from 'react'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <h3>Welcome to Galaxy Customer Management System!</h3>
                <h5>User Guide</h5>
                <ul>
                    <li>When filtering, customer details page will be closed.</li>
                    <li>When sorting, customer details page won't be closed.</li>
                    <li>Since currently there isn't any fields beside customer status could be change, customer status will be updated once you change the selector option. No submit required.</li>
                    <li>Since user part hasn't been implemented, all notes are showing under my name, but the submitted time is true.</li>
                </ul>
                <h5>Features must have</h5>
                <ul>
                    <li>Add/edit/delete user</li>
                    <li>Max note length limitation</li>
                    <li>User related functions</li>
                </ul>
                <h5>Features could be improved</h5>
                <ul>
                    <li>When Home/Customer is selected, it should be highlighted on navigation bar</li>
                    <li>When showing narrow customer list, status could be showed as an small icon with different colors</li>
                    <li>Edit note button should be moved to another place</li>
                    <li>Edit note popup should be closed when click background</li>
                    <li>Show a spinning image while loading data</li>
                </ul>
            </div>
        );
    }
}

export default Home