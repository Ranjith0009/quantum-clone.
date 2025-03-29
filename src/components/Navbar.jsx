import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/Vector.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="Quantum Smart Hub Logo" className="logo" />

      {/* Hamburger Icon (Only on Mobile) */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Hidden Navigation Menu */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
