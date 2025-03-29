import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
            <p className="footer-text">© 2024 Quantum Smart Hub</p>

      <div className="footer-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </footer> 
  );
};

export default Footer;
