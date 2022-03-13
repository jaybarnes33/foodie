import React from "react";
import { Card, CardImg, Col, Container, Row } from "react-bootstrap";

const FeaturedFoods = () => {
  const featuredItems = [
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
        <h2 className="bold">Available Sellers</h2>

        <Row>
          {featuredItems.map((item, key) => (
            <Col xs={4} lg={3} key={`item-key`}>
              <Card
                style={{
                  border: "none",
                  boxShadow: "0 8.21687px 8.21687px rgba(0,0,0,.1)",
                }}
              >
                <CardImg src={`/images/landing/${item.image}`} />
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

export default FeaturedFoods;