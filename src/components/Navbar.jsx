import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/toplogo1.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="left-section">
        <img src={logo} alt="Skipper Logo" className="logo-img" />
        
        <div className={`nav-linkss ${open ? 'show' : ''}`}>
          <div className="nav-item dropdown">
            Learn <span className="arrow">▾</span>
            <div className="dropdown-menu">
              <div className="dropdown-item">Courses</div>
              <div className="dropdown-item">Projects</div>
              <div className="dropdown-item">Live Classes</div>
            </div>
          </div>

          {/* Become a Member with Dropdown */}
          <div className="nav-item dropdown">
            Become a <span className="highlight">member</span> <span className="arrow">▾</span>
            <div className="dropdown-menu">
              <div className="dropdown-item">Membership Plans</div>
              <div className="dropdown-item">Benefits</div>
              <div className="dropdown-item">FAQs</div>
            </div>
          </div>

          <span className="nav-item">About</span>
        </div>
      </div>

      <div className={`nav-buttons ${open ? 'show' : ''}`}>
        <button className="btn black">Login</button>
        <button className="btn white">Contact Us</button>
      </div>

      <button className="hamburger" onClick={() => setOpen(!open)}>☰</button>
    </nav>
  );
};

export default Navbar;
