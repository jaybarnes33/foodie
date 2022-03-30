import Link from "next/link";
import React from "react";
import { Card, Image } from "react-bootstrap";
import Rating from "./Rating";

const ProductCard = ({ item }: { item: Record<string, any> }) => {
  return (
    <Link href={`/foods/${item.id}`} passHref>
      <Card
        className="position-relative d-flex mt-5  mb-2 justify-content-center align-items-center"
        style={{
          border: "none",
          width: 220,
          cursor: "pointer",
          borderRadius: 30,
          boxShadow: "0px 30px 60px 0px #3939391A",
        }}
      >
        <Image
          className="position-absolute top-0"
          style={{ transform: "translateY(-50%)" }}
          src={`${item.image}`}
          width={90}
          height={90}
          roundedCircle
          alt={item.name}
        />

        <Card.Body className="py-5 d-flex justify-content-center">
          <small>
            <h6>{item.name}</h6>
            <Rating value={item.rating} text={"0 reviews"} />
          </small>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ProductCard;
