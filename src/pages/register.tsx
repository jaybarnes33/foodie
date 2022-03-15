import React, { ChangeEvent, FormEvent } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import FormWrapper from "@/components/Auth/FormWrapper";
import { useState } from "react";
import axios from "axios";

interface IRegister {
  fullName: string;
  email: string;
  password: string;
}

const Register = () => {
  const [registerData, setRegisterData] = useState<IRegister>({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/register/", { ...registerData });
      if (data.refreshToken) {
        sessionStorage.setItem("token", data.refreshToken);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Fullname</Form.Label>
          <Form.Control
            placeholder="Enter your Fullname"
            type="text"
            name="fullName"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            placeholder="Enter your email"
            type="email"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mt-4">
          <Form.Label>Password</Form.Label>
          <Form.Control
            placeholder="Enter your password"
            type="password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button type="submit" variant="danger" size="lg">
            Register
          </Button>
        </div>
      </Form>
    </FormWrapper>
  );
};

export default Register;
