import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button, Container} from 'react-bootstrap';
import '../sass/style.scss';

class Header extends Component{
    render(){
        return (
            <Navbar bg="light" expand="lg" >
            <Navbar.Brand className="my-nav" >Filmu paieška</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" className="nav-drop" >
                        <NavDropdown title="Apie" id="basic-nav-dropdown" className="justify-content-end">
                        <NavDropdown.Item className="nav-drop-item">
                            Filmų paieškos svetainė atsiskaitymui</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;