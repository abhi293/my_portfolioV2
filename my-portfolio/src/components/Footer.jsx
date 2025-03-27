// Footer.jsx
import React from 'react';
import '../styles/Footer.css';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__brand">
        <a href="#">ABHINAV.</a>
        <p>© {currentYear} Abhinav Anand & Co.</p>
      </div>
      <div className="footer__links">
        <a href="#">Home</a>
        <a href="#showcase">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#career">About</a>
      </div>
    </footer>
  );
};

export default Footer;
