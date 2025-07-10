import React from 'react';
import './LaunchSection.css';

const LaunchSection = () => {
  return (
    <section className="launch-section">
      <div className="launch-container">

        {/* Left Section with Image Background */}
        <div className="launch-left">
          <div className="launch-left-bg"></div> {/* Background image div */}

          <h2>
            Launching <span className="highlight">soon</span>
          </h2>
          <h3>
            Big Launch Ahead: <span className="highlight">10+ Skill-Boosting</span><br />
            <em>Programs</em>
          </h3>
          <p>Next-gen learning designed to launch your career.</p>
          <button className="launch-btn">Join Waiting list</button>
        </div>

        {/* Right Animated Background + Card */}
        <div className="launch-right">
          <div className="block-columns">
            {[...Array(4)].map((_, colIndex) => (
              <div
                key={colIndex}
                className={`block-column ${colIndex % 2 === 0 ? 'scroll-up' : 'scroll-down'}`}
              >
                {[
                    "Data Analyst",
                    "UI/UX",
                    "Web Dev",
                    "Cybersecurity",
                    "AI/ML",
                    "Cloud",
                    "DevOps",
                    "Product Design",
                    "AR/VR",
                    "Data Science"
                  ].map((text, idx) => (
                  <div className="block" key={idx}>{text}</div>
                ))}
              </div>
            ))}
          </div>

          {/* Gradient Overlay */}
          <div className="launch-gradient-overlay"></div>

          {/* Right Card */}
          <div className="right-card">
            <div className="tag">⭐ Your Mini Gold Mine</div>
            <p className="starting-text">Starting at just</p>
            <h2 className="price">₹199/-</h2>
            <div className="coming-soon">COMING SOON</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchSection;
