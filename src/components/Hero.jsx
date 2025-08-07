import React from 'react';
import './Hero.css';
import bgImage from '../assets/hero-landing-hd.png';


const Hero = () => {
  return (
    <div className="hero-img-wrapper">
      <img src={bgImage} alt="background" className="hero-img" />
      <div className="overlayp">
        <h1>
          Your dream skill is, not days, not hours but <span className="highlight-red">minutes</span> away
        </h1>
        <p>Built for Innovators, Entrepreneur & Hustlers</p>
        <button className="btn red">Explore Programs</button>
      </div>
    </div>
  );
};

export default Hero;
