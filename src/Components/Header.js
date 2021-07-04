import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <img
            src="/techforing-logo.png"
            className="d-inline-block align-top logo"
            alt="techforing logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" style={{fontWeight:"bolder"}}>
          <Nav className="me-auto">
            <Nav.Link href="#more">More</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#resources">Resources</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button className="ms-auto navbar-button" variant="outline-primary">
          Submit / Sign In
        </Button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
};

export default Header;
