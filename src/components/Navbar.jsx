import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/images/Vector.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (menuOpen && !e.target.closest('.navbar')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener('click', closeMenu);
  }, [menuOpen]);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-content">
        <img src={logo} alt="Quantum Smart Hub Logo" className="logo" />

        <button
          className="menu-toggle"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
          aria-label="Toggle Menu"
        >
          {menuOpen ? '×' : '☰'}
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;