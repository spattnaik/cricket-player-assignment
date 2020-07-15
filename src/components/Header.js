import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

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
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Nav.Link href="#" onClick={props.onAddPress}>Add Player</Nav.Link>
            </Navbar.Collapse>

        </Navbar>
    )
}

export default Header;