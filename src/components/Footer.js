
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact">
          <h3>Contact</h3>
          <p>jaybhagwan1@proton.me</p>
          <p>Phone: +91-8949354125</p>
        </div>
        <div className="social-media">
        <br/> <br/>
          <h3>Connect with Me</h3>
          <a href="https://www.linkedin.com/in/jay-bhagwan/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/mnu4513" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {/* Add more social media links as needed */}
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Jay Bhagwan. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;