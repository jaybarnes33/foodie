import Header from "../components/Layout/Header";
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
import Today from "../components/Landing/Today";

import Banner from "../components/Layout/Banner";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="body">
      <Header variant="dark" />
      <Head>
        <title>Hungry? Order food and have it delivered straight to you.</title>
        <meta
          name="description"
          content="Hungry? Order food and have it delivered straight to you. All it takes is just a few clicks"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Banner image="/images/landing/bg.jpg" height="60vh">
          <Container>
            <div>
              <h1 className="primary bold">Why stay hungry?</h1>
              <p>Order food and have it delivered straight to you.</p>

              <InputGroup>
                <Form.Control placeholder="Search for food/restaurant" />
                <Button variant="warning">Search</Button>
              </InputGroup>
            </div>
          </Container>
        </Banner>
        <Today />
        <FeaturedFoods />
        <footer className="d-flex justify-content-center">
          &copy; {new Date().getFullYear()} All rights reserved
        </footer>
      </>
    </div>
  );
}
