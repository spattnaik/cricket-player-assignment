import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from 'react-router-dom';

const Header = (props) => {
    return (
        <Navbar fixed="top">
            <Navbar.Brand href="#home">
                <img
                    src="https://upload.wikimedia.org/wikipedia/en/8/8d/Cricket_India_Crest.svg"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="Indian Team Logo"
                />
            </Navbar.Brand>Indian Cricket Team
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/cricketers">
                        <Nav.Link href="#">Cricketer List</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="#">
                        <Nav.Link
                            href="#"
                            onClick={(event) => {
                                props.location.pathname === "/cricketers"
                                    ? props.onAddPress(event)
                                    : window.alert('This facility is only available while browsing cricketrs list')
                            }}
                        >
                            Add Cricketer
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/schedules">
                        <Nav.Link href="#">Schedule</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header);