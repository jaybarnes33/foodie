import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "../Core/Carousel";

import ProductCard from "../Core/ProductCard";

export const featuredItems = [
  {
    id: 0,
    name: "Hostel Crust",
    image: "/images/landing/home.jpg",
    rating: 5,
  },
  { id: 1, name: "Adisa Waakye", image: "/images/landing/bg.jpg", rating: 4.5 },
  { id: 2, name: "Awala Waakye", image: "/images/landing/home.jpg", rating: 4 },
  { id: 3, name: "Yam and Pork", image: "/images/landing/home.jpg", rating: 5 },
];
const FeaturedFoods = () => {
  return (
    <section className="py-5 ">
      <Container>
        <h2 className="bold">Available Sellers</h2>

        <Carousel>
          {featuredItems.map((item, key) => (
            <ProductCard item={item} key={`featured-${key}`} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default FeaturedFoods;
