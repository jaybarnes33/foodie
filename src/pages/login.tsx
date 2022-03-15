import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import FormWrapper from "../components/Auth/FormWrapper";

interface ILogin {
  email: string;
  password: string;
}
const Login = () => {
  const [loginData, setLoginData] = useState<ILogin>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/auth/", { ...loginData });
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
            Login
          </Button>
        </div>
      </Form>
    </FormWrapper>
  );
};

export default Login;
