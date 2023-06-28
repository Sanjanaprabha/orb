import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          ORB 
        </Link>
        <div className={`navbar-links ${isNavOpen ? 'active' : ''}`}>
          <Link to="/dashboard" className="navbar-link" onClick={toggleNav}>
            Home
          </Link>
          <Link to="/about" className="navbar-link" onClick={toggleNav}>
            About
          </Link>
          <Link to="/contact" className="navbar-link" onClick={toggleNav}>
            Contact
          </Link>
          <Link to="/contact" className="navbar-link" onClick={toggleNav}>
            Rate Us
          </Link>
        </div>
        <div className="navbar-toggle" onClick={toggleNav}>
          <i className={`fas ${isNavOpen ? 'fa-times' : 'fa-bars'}`} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
