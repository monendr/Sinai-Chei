// Footer.js

import React from 'react';
import './Footer.css'; // Import CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="footer-logo">Sinai Chei</h2>
            <p>
              Sinai Chei is dedicated to helping you find the perfect match. We value your privacy and strive to create a safe and enjoyable dating experience.
            </p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Messages</a></li>
              <li><a href="#">Matches</a></li>
              <li><a href="#">Settings</a></li>
            </ul>
          </div>
          <div className="footer-section contact-form">
            <h2>Contact Us</h2>
            <form>
              <input type="email" name="email" className="text-input contact-input" placeholder="Your email address" />
              <textarea name="message" className="text-input contact-input" placeholder="Your message"></textarea>
              <button type="submit" className="btn btn-primary">Send</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Sinai Chei. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
