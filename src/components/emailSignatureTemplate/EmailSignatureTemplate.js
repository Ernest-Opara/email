import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt, faLink } from '@fortawesome/free-solid-svg-icons';
import './EmailSignatureTemplate.css';
import logoImage from '../../assets/tflogo.png'

const EmailSignatureTemplate = ({ data }) => {
  const { name, role, email, emailPicture, pNumber } = data;
  const hasPersonalNumber = !!pNumber;
  

  return (
    <div className={`email-signature-template ${hasPersonalNumber ? 'has-personal-number' : ''}`}>
      <Card className="left-half">
        <div className="profile-picture">
          <img src={emailPicture} alt="Profile" />
        </div>
        <div className="company-logo">
          <img src={logoImage} alt="Company Logo" />
        </div>
      </Card>
      <Card className="right-half">
        <Card.Body>
        <div className='name'>
          <Card.Title>{name}</Card.Title></div>
          <Card.Subtitle className="mb-2 text-muted">{role}</Card.Subtitle>
          <Card.Text>ThriveFuel Marketing</Card.Text>
          <div className="contact-info">
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <a href={`mailto:${email}`}>{email}</a>
            </div>
            <div className='contact-item'>{pNumber && (
              <p className="user-phone">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <a href='tel:{pNumber}'>{pNumber}</a>
              </p>
          )} </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <a href='tel:833-239-3183' >833-239-3183</a>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
              <a href='https://goo.gl/maps/1dvEwQAuiTFTHYnu8' >4611 E Airline Rd, Ste 200 Victoria, TX 77904 </a>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faLink} className="contact-icon" />
              <a href='https://www.thrivefuel.com'><strong>thrivefuel.com</strong></a>
            </div>
          </div>
          <div className="social-media-icons">
            <a href="https://www.facebook.com/your-facebook-url" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="social-media-icon" />
            </a>
            <a href="https://www.instagram.com/your-instagram-url" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="social-media-icon" />
            </a>
            <a href="https://www.tiktok.com/your-tiktok-url" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} className="social-media-icon" />
            </a>
            <a href="https://www.linkedin.com/your-linkedin-url" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="social-media-icon" />
            </a>
            <a href="https://twitter.com/your-twitter-url" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="social-media-icon" />
            </a>
            <a href="https://www.youtube.com/your-youtube-url" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} className="social-media-icon" />
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EmailSignatureTemplate;
