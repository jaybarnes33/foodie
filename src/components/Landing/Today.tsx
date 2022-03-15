import Image from "next/image";
import React from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";

const Today = () => {
  const today = [
    {
      name: "Hostel Crust",
      image: "home.jpg",
    },
    {
      name: "Adisa Waakye",
      image: "bg.jpg",
    },
    {
      name: "Awala Waakye",
      image: "home.jpg",
    },
    {
      name: "Yam and Pork",
      image: "home.jpg",
    },
  ];
  return (
    <section className="py-5">
      <Container>
        <h2 className="bold">Available Today</h2>

        <Row>
          {today.reverse().map((item, key) => (
            <Col sm={6} lg={3} key={`item-key`} className="mt-2">
              <Card
                style={{
                  border: "none",
                  boxShadow: "0 8.21687px 8.21687px rgba(0,0,0,.1)",
                }}
              >
                <CardImg
                  src={`/images/landing/${item.image}`}
                  as={Image}
                  width="100"
                  height="120"
                  quality={100}
                  objectFit="cover"
                  alt={item.name}
                  loading="lazy"
                />
                <Card.Body>
                  <small>
                    <h6>{item.name}</h6>
                    <span>0 reviews</span>
                  </small>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Today;
