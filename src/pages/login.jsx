import React from "react";
import "./login.css";
import loginImage from "../assets/login-bg1.png"; 
import googleLogo from "../assets/login-google.png";
import harish from '../assets/harisha.jpg'
import sai from '../assets/saisai.png'
import hari from '../assets/harih.jpg'
import sakshi from '../assets/saksh.png'

const Login = () => {
  return (
    <div className="login-page-container">
     
     
      <div className="login-left-section">
        <div className="login-image-container">
          <img src={loginImage} alt="Login Background" className="login-bg-img" />


          <div className="login-top-left-card">
            
            <div className="login-passion-card">
                Skills that fulfills your <strong>PASSION</strong>
            </div>
            <div className="login-active-learners">
                <strong>20,000+</strong>
                <span>Active Learners</span>
            </div>
          </div>




          <div className="login-top-right-card">
            <div className="login-avatars">
                <img src={sai} alt="login-avatar" />
                <img src={harish} alt="login-avatar" />
                <img src={hari} alt="login-avatar" />
                <img src={sakshi} alt="login-avatar" />
                <span>+20,000</span>
             </div>
          </div>
          <h1 className="login-lead-text">LEAD THE CHANGE.</h1>
        </div>
      </div>

      
      <div className="login-right-section">
        <form className="login-form">
          <h2 className="login-title">LOGIN</h2>
          <p className="login-subtitle">Welcome back! Please enter your details.</p>
          <input type="email" placeholder="Email" className="login-input" required />
          <input type="password" placeholder="Password" className="login-input" required />
          <div className="login-options">
            <input type="checkbox" className="login-remember"/> <span className="remember">Remember me</span>
            <a href="/forget" className="navlink" ><span className="login-forgot" >Forgot password</span></a>
          </div>
          <button type="submit" className="login-submit-btn">Login</button>
          <div className="login-divider"><span>or</span></div>
          <button type="button" className="login-google-btn">
            <img src={googleLogo} alt="Google" />
            Login with Google
          </button>
          <p className="login-signup-text">
            Not a member? <a href="/signup" className="login-signup-link">Signup now</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
