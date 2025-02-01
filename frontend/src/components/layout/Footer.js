import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/kids">Kids</Link>
        </div>
        <div className="footer-section">
          <h3>Customer Service</h3>
          <Link to="/contact">Contact Us</Link>
          <Link to="/shipping">Shipping Info</Link>
          <Link to="/returns">Returns</Link>
        </div>
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Your one-stop fashion destination</p>
          <p>Email: contact@fashionstore.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Fashion Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 