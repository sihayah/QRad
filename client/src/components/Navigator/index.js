import React from "react";
import { Navbar, NavbarBrand, Nav, Container } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import './navigator.css';

function Navigator() {

  return (
    <div>
      <Navbar className="navBar">
        <Container className="navContainer">
          <Nav className="navLinks">
          <LinkContainer to="/" className="brand">
            <NavbarBrand>QRad</NavbarBrand>
            </LinkContainer>
            <LinkContainer to="/profile" className="navLink">
              <Nav.Link>my QRad</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/profile' className="navLink">
              <Nav.Link>profile</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contacts" className="navLink">
              <Nav.Link>my Contacts</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
export default Navigator;
