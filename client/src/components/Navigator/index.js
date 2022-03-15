import React from "react";
import { Navbar, NavbarBrand, Nav, Container } from "react-bootstrap";

function Navigator() {
  return (
    <header>
      <Navbar bg="light">
        <Container>
          <NavbarBrand href="/">QRad</NavbarBrand>
          <Nav className="me-auto">
            <Nav.Link href="#my-profile">My Profile</Nav.Link>
            <Nav.Link href="#my-contacts">My Contacts</Nav.Link>
            <Nav.Link href="#my-qr">My QR Code</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}
export default Navigator;
