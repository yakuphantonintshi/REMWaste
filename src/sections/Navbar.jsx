import React, { useState } from "react";
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar-container ${menuOpen ? 'open' : ''}`}>
      <button className="hamburger" onClick={toggleMenu}>
        <i className="bi bi-list"></i>
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li>
          <a href="#">
            <i className="bi bi-geo-alt"></i> <span>Postcode</span>
          </a>
        </li>
        <li>
          <a href="#waste">
            <i className="bi bi-trash"></i> <span>Waste Type</span>
          </a>
        </li>
        <li>
          <a href="#skip" className="zoom-in">
            <i className="bi bi-truck"></i> <span> Select Skip</span>
          </a>
        </li>
        <li>
          <a href="#permit" className="no-color">
            <i className="bi bi-shield"></i> Permit Check
          </a>
        </li>
        <li>
          <a href="#date" className="no-color">
            <i className="bi bi-calendar4"></i> Choose Date
          </a>
        </li>
        <li>
          <a href="#payment" className="no-color">
            <i className="bi bi-credit-card"></i> Payment
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
