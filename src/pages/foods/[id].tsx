import Carousel from "@/components/Core/Carousel";
import ProductCard from "@/components/Core/ProductCard";
import Rating from "@/components/Core/Rating";
import { featuredItems } from "@/components/Landing/FeaturedFoods";
import Header from "@/components/Layout/Header";
import { Router, useRouter } from "next/router";
import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

const Food = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = featuredItems[String(id)];
  return (
    <div>
      {" "}
      <Header />
      <section className="d-flex justify-content-center my-4">
        <Container>
          <Row className="d-flex justify-content-center   ">
            <Col md={4}>
              <div>
                <Image src={product?.image!} alt={product?.name} fluid />
                <p className="bold my-2">{product?.name}</p>
                <small className="bold">
                  GHS {Math.round(Math.random() * 1000 + 1)}.00
                </small>
                <Rating value={product?.rating} />
              </div>
            </Col>
            <Col md={5}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex
                atque recusandae harum eum animi nam in facilis, architecto
                minima ipsum?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
                sit quod velit non pariatur magni unde enim, harum voluptatem
                at.
              </p>
              <div className="d-grid">
                <Button variant="warning" className="btn btn-block">
                  Add to Cart
                </Button>
              </div>
            </Col>
            <Col md={3}>
              <small style={{ fontSize: "0.7rem" }}>
                <ul>
                  <li>
                    <text className="bold">Delivery Info</text>
                    <p>
                      Your order will be picked up and delivered to you by the
                      closest rider if you choose to have it delivered at
                      checkout
                    </p>
                  </li>
                  <li>
                    <text className="bold">Special Request</text>
                    <p>
                      You can choose to request for special packages at checkout
                    </p>
                  </li>
                </ul>
              </small>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <h2>You might like</h2>
          <Carousel>
            {featuredItems.map((item, key) => (
              <ProductCard item={item} key={`featured-${key}`} />
            ))}
          </Carousel>
        </Container>
      </section>
    </div>
  );
};

export default Food;
