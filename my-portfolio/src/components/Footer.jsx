// Footer.jsx
import React from 'react';
import '../styles/Footer.css';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__brand">
        <a href="#">NIKHIL.</a>
        <p>© {currentYear} Nikhil Soni & Co.</p>
      </div>
      <div className="footer__links">
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">Skills</a>
        <a href="#">About</a>
      </div>
    </footer>
  );
};

export default Footer;
