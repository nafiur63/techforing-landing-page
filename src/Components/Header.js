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
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">More</Nav.Link>
            <Nav.Link href="#link">Services</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Pricing</Nav.Link>
            <Nav.Link href="#memes">Features</Nav.Link>
            <Nav.Link href="#memes">Resources</Nav.Link>
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
