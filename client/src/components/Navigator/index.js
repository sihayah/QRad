import React from "react";
import { Navbar, NavbarBrand, Nav, Container } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

function Navigator() {
  return (
    <div>
      <Navbar bg="light">
        <Container>
          <LinkContainer to="/">
            <NavbarBrand>QRad</NavbarBrand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to='/profile'>
              <Nav.Link>profile</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contacts">
              <Nav.Link>my Contacts</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/profile">
              <Nav.Link>my QRad</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
export default Navigator;
