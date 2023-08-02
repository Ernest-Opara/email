import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import './Forms.css';
import logoImage from '../../assets/tflogo.png'

const EmailSignatureForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [pNumber, setpNumber] = useState('');
  const [email, setEmail] = useState('');
  const [emailPicture, setEmailPicture] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      role,
      pNumber,
      email,
      emailPicture,
    };
    onSubmit(formData);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setEmailPicture(imageURL);
  };

  return (
    <Card className="form-card">
      <Card.Img variant="top" src={logoImage} className="form-logo" />
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Personal Number</Form.Label>
            <Form.Control
              type="text"
              value={pNumber}
              onChange={(e) => setpNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email Picture</Form.Label>
            <Form.Control
              type="file"
              name="emailPicture"
              onChange={handleImageChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EmailSignatureForm;
