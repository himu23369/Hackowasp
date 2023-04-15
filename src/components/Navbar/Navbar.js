import React from 'react';
import './Navbar.css';
import { Navbar, Nav, Button } from 'react-bootstrap';

const StayEZNavbar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home" className="text-light">StayEZ</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="text-light">Home</Nav.Link>
          <Nav.Link href="#about" className="text-light">About</Nav.Link>
          <Nav.Link href="#help" className="text-light">Help</Nav.Link>
          <Button variant="outline-secondary" id="Login" className="ml-2 text-light">Login</Button>
          <Button variant="light" id="Signup" className="ml-2 text-dark">Signup</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default StayEZNavbar;
