import Image from "next/image";
import React from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";
import Carousel from "../Core/Carousel";
import ProductCard from "../Core/ProductCard";
import { featuredItems } from "./FeaturedFoods";

const Today = () => {
  return (
    <section className="py-5">
      <Container>
        <h2 className="bold">Available Today</h2>

        <Carousel>
          {featuredItems.map((item, key) => (
            <ProductCard item={item} key={`featured-${key}`} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Today;
