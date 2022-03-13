import Head from "next/head";
import Image from "next/image";
import {
  Button,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import FeaturedFoods from "../components/Landing/FeaturedFoods";

import Banner from "../components/Layout/Banner";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hungry? Order food and have it delivered straight to you.</title>
        <meta
          name="description"
          content="Hungry? Order food and have it delivered straight to you. All it takes is just a few clicks"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Navbar expand="lg" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand href="/">3dzi</Navbar.Brand>
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
                  <Button variant="danger">Login</Button>
                  <Button variant="outline-danger">Register</Button>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Banner image="/images/landing/bg.jpg" height="65vh">
          <Container>
            <div>
              <h1 className="primary bold">Why stay hungry?</h1>
              <p className="text-secondary">
                Order food and have it delivered straight to you.
              </p>

              <InputGroup>
                <Form.Control placeholder="Search for food/restaurant" />
                <Button variant="danger">Search</Button>
              </InputGroup>
            </div>
          </Container>
        </Banner>
        <FeaturedFoods />
      </>
    </>
  );
}
