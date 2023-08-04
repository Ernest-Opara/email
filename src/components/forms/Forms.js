import React, { useState } from "react";
import { Card, Form, Button, Row, Col } from "react-bootstrap";
import "./Forms.css";
import logoImage from "../../assets/tflogo.png";
import profileImagePlaceholder from "../../assets/image.png";

const EmailSignatureForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [pNumber, setpNumber] = useState("");
  const [bLink, setbLink] = useState("");
  const [email, setEmail] = useState("");
  const [emailPicture, setEmailPicture] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      role,
      pNumber,
      bLink,
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
    <div className="container">
      <Row className="equal-height">
        {/* Left Column: Picture */}
        <Col xs={12} md={6}>
          <div className="profile-picture-container">
            <img
              src={profileImagePlaceholder} // Replace this with the image URL from the form
              alt="Profile"
              className="profile-image"
            />
          </div>
        </Col>
        <Col xs={12} md={6}>
          <Card className="form-card">
            <Card.Img variant="top" src={logoImage} className="form-logo" />
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="data">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Enter your name"
                  />
                </Form.Group>
                <Form.Group className="data">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                    placeholder="Enter your role"
                  />
                </Form.Group>
                <Form.Group className="data">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                  />
                </Form.Group>
                <Form.Group className="data">
                  <Form.Label>Personal Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={pNumber}
                    onChange={(e) => setpNumber(e.target.value)}
                    placeholder="Enter your personal number (Optional)"
                  />
                </Form.Group>
                <Form.Group className="data">
                  <Form.Label>Booking Link</Form.Label>
                  <Form.Control
                    type="text"
                    value={bLink}
                    onChange={(e) => setbLink(e.target.value)}
                    placeholder="Enter your booking link (Optional)"
                  />
                </Form.Group>
                <Form.Group className="data">
                  <Form.Label>Email Picture</Form.Label>
                  <Form.Control
                    type="file"
                    name="emailPicture"
                    onChange={handleImageChange}
                    required
                  />
                </Form.Group >
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default EmailSignatureForm;
