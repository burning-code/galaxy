import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Sidebar extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect className="navbar-fixed-left">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Galaxy</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={"home"} href="/">
                            Home
                        </NavItem>
                        <NavItem eventKey={"customers"} href="/customers">
                            Customers
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Sidebar;