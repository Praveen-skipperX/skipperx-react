import React from "react";
import "./signup.css";
import loginImage from "../assets/login-bg1.png"; 
import googleLogo from "../assets/login-google.png";
import harish from '../assets/harisha.jpg'
import sai from '../assets/saisai.png'
import hari from '../assets/harih.jpg'
import sakshi from '../assets/saksh.png'

const Signup = () => {
  return (
    <div className="signup-page-container">
     
     
      <div className="signup-left-section">
        <div className="signup-image-container">
          <img src={loginImage} alt="signup Background" className="signup-bg-img" />


          <div className="signup-top-left-card">
            
            <div className="signup-passion-card">
                Skills that fulfills your <strong>PASSION</strong>
            </div>
            <div className="signup-active-learners">
                <strong>20,000+</strong>
                <span>Active Learners</span>
            </div>
          </div>




          <div className="signup-top-right-card">
            <div className="signup-avatars">
                <img src={sai} alt="signup-avatar" />
                <img src={harish} alt="signup-avatar" />
                <img src={hari} alt="signup-avatar" />
                <img src={sakshi} alt="signup-avatar" />
                <span>+20,000</span>
             </div>
          </div>
          <h1 className="signup-lead-text">LEAD THE CHANGE.</h1>
        </div>
      </div>

      
      <div className="signup-right-section">
        <form className="signup-form">
          <h2 className="signup-title">SIGNUP</h2>
          <p className="signup-subtitle">Please enter your details.</p>
          <input type="name" placeholder="Full Name" className="signup-input" required />
          <input type="email" placeholder="Email" className="signup-input" required />
          <input type="tel" placeholder="Contact Number" className="signup-input" required />
          <input type="password" placeholder="Set Password" className="signup-input" required />
          <input type="password" placeholder="Confirm Password" className="signup-input" required />
          
          <button type="submit" className="signup-submit-btn">Signup</button>
          <div className="signup-divider"><span>or</span></div>
          <button type="button" className="signup-google-btn">
            <img src={googleLogo} alt="Google" />
            Login with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
