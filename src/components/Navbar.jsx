import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../assets/skipper-black.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="left-section">
        <a href='/'><img src={logo} alt="Skipper Logo" className="logo-img" /></a>
        
        <div className={`nav-linkss ${open ? 'show' : ''}`}>
          <div className="nav-item dropdown">
            <span className="navbar-learn">Learn </span><span className="arrow">▾</span>
            <div className="dropdown-menu">
              <div className="dropdown-item">Courses</div>
              <div className="dropdown-item">Projects</div>
              <div className="dropdown-item">Live Classes</div>
            </div>
          </div>

          {/* Become a Member with Dropdown */}
          <div className="nav-item dropdown">
            <span className="navbar-member">Become a <span className="highlight">member</span> <span className="arrow">▾</span></span>
            <div className="dropdown-menu">
              <div className="dropdown-item">Membership Plans</div>
              <div className="dropdown-item">Benefits</div>
              <div className="dropdown-item">FAQs</div>
            </div>
          </div>

          <span className="nav-item"><span className="navbar-member"><Link to="/about" className="navlink" >About</Link></span></span>
        </div>
      </div>

      <div className={`nav-buttons ${open ? 'show' : ''}`}>
        <Link to="/login" className="navlink" ><button className="btn black">Login</button></Link>
        <Link to="/contact" className="navlink" ><button className="btn white">Contact Us</button></Link>
      </div>

      <button className="hamburger" onClick={() => setOpen(!open)}>☰</button>
    </nav>
  );
};

export default Navbar;
