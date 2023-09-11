import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {CardWidget} from '../CardWidget/CardWidget';
import './NavBar.css'

function NavBar() {
  return (
    <Navbar expand="lg" className="NavBar">
      <Container>
        <Navbar.Brand href="#home" className='branch'>Organic</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='pages'>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Store</Nav.Link>
            <Nav.Link href="#link">Shops</Nav.Link>
            <Nav.Link href="#link">About us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      <CardWidget/>
      </Container>
    </Navbar>
  );
}

export default NavBar;
