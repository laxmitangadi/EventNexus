import React from 'react';
import { FaTwitter, FaPinterest, FaFacebook, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Company</h4>
          <a href="#careers">Careers</a>
          <a href="#about">About Us</a>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
        </div>

        <div className="footer-section social-icons">
          <h4>Follow Us</h4>
          <div className="icons-row">
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer"><FaPinterest /></a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
