import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = ({ variant }: { variant?: "dark" | "light" }) => {
  return (
    <Navbar expand="lg" bg={"light"}>
      <Container>
        <Navbar.Brand href="/">
          <Image width={90} height={60} src="/logo.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4">
            <Nav.Link href="/foods">Foods</Nav.Link>

            <Nav.Link href="/vendors">Become a seller</Nav.Link>
            <Nav.Link href="/couriers">Become a courier</Nav.Link>

            <Nav.Link as={Link} href="/login">
              <Button variant="warning">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
