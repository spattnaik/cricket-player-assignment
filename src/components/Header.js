import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

const Header = (props) => {
    return (
        <Navbar fixed="top">
            <Navbar.Brand href="#home">
                <img
                    src="https://logos-download.com/wp-content/uploads/2016/10/BCCI_logo.png"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="Indian Team Logo"
                />
            </Navbar.Brand>BCCI
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/cricketers">
                        <Nav.Link href="#">Cricketer List</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="#">
                        <Nav.Link href="#" onClick={props.onAddPress}>Add Cricketer</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/schedules">
                        <Nav.Link href="#">Schedule</Nav.Link>
                    </LinkContainer>                
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;