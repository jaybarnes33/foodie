import Image from "next/image";
import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <Image width={100} height={70} src="/logo.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-5">
            <Nav.Link href="/foods">Foods</Nav.Link>

            <NavDropdown title="Partners" id="basic-nav-dropdown">
              <NavDropdown.Item href="/vendors">
                Become a seller
              </NavDropdown.Item>
              <NavDropdown.Item href="/couriers">
                Become a courier
              </NavDropdown.Item>
            </NavDropdown>
            <div className="d-flex gap-5">
              <Button variant="danger" size="sm">
                Login
              </Button>
              <Button variant="outline-danger" size="sm">
                Register
              </Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
