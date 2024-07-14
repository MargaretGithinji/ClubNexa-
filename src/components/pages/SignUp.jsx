// src/Signup.js

import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../../styles/signup.css';

const Signup = () => {
  return (
    <Container className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <Form className="signup-form">
        <Form.Group controlId="formName">
          <Form.Label>FirstName</Form.Label>
          <Form.Control type="text" placeholder="Enter your first name" />
              </Form.Group>
              <Form.Group controlId="formName">
          <Form.Label>LastName</Form.Label>
          <Form.Control type="text" placeholder="Enter your fast name" />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" />
        </Form.Group>
        <Button variant="primary" type="submit" className="signup-button">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;
