import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import './header.css';
const Header = () => {
  return (
    <Navbar className="navbar" expand="lg">
      <Container>
        <Navbar.Brand className="text-white" href="#home">
          My transactions
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="text-white" href="#link">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
