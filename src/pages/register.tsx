import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import FormWrapper from "../components/Auth/FormWrapper";

const register = () => {
  return (
    <FormWrapper>
      <Form>
        <Form.Group>
          <Form.Label>Fullname</Form.Label>
          <Form.Control placeholder="Enter your Fullname" type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control placeholder="Enter your email" type="email" />
        </Form.Group>

        <Form.Group className="mt-4">
          <Form.Label>Password</Form.Label>
          <Form.Control placeholder="Enter your password" type="password" />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button variant="danger" size="lg">
            Register
          </Button>
        </div>
      </Form>
    </FormWrapper>
  );
};

export default register;
