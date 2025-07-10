
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import logo from '../assets/skipper-logo3.png';


const Footer = () => { 
    
  return (
    
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-left">
          <img src={logo} alt="Skipper Logo" className="footer-logo" />
          <p>VMF2+7FJ Classic Arena, Hosur Rd, AECS Layout-A Block,
            Singasandra, Bengaluru, <br/> Karnataka 560068</p>
          
          <p><a href="#">support@skipperx.io</a></p>
          <p><a href="#">+91 9888888888</a></p>

          <div className="exclusive">
            <h3>Community Exclusive</h3>
            <p><strong>Subscribe</strong> to our newsletter for exclusive updates on the latest releases and special offers.</p>
            <div className="subscribe-wrapper">
              <input type="email" placeholder="Email Id" className="subscribe-input" />
              <button className="subscribe-button">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-sections">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Apply as Mentor</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Programs</h4>
            <ul>
              <li><a href="#">For Innovators</a></li>
              <li><a href="#">For Doers</a></li>
              <li><a href="#">For Enterpreneurs</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li>< Link to="/privacy-policy" >Privacy Policy</Link></li>

              <li><Link to="/t & c">Terms and Condition</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li ><a href="#">FAQ</a></li>
              <li><Link to="/refund-policy">
          Refund Policy
        </Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2025 . All rights reserved.</p>
        <div className="footer-socials">
          <FaLinkedin />
          <FaFacebook />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
