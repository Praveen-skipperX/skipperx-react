import React from "react";
import "./SuperStack.css";


const stackData = [
  {
    title: "Startup Stack",
    subtitle: "7+ Diverse Program",
    successRate: "93% land biz roles or launch ventures",
    tag: "Business",
    footer: "Business Analytics · Human Resource · Finance · Fashion Design",
    bgImage: require("../assets/1sttt.png"),
  },
  {
    title: "Core Tech",
    subtitle: "6+ Diverse Program",
    successRate: "90% land tech roles or launch products",
    tag: "Tech",
    footer: "Cybersecurity · Data Science · UI/UX Design · Web Development",
    bgImage: require("../assets/2nd.png"),
  },
  {
    title: "Creators hub",
    subtitle: "7+ Diverse Program",
    successRate: "88% grow brands or start freelancing.",
    tag: "Creative",
    footer: "Graphic Design · Photography · Content creation · UIUX · Digital media",
    bgImage: require("../assets/3rdd.png"),
  },
];

const SuperStack = () => {
  return (
    <section className="stack-wrapper">
      <h2 className="stack-heading">
        Super <span className="highlight-text">Stack</span>
      </h2>
      <div className="stack-card-container">
        {stackData.map((item, index) => (
          <div
            className="stack-box"
            key={index}
            style={{ backgroundImage: `url(${item.bgImage})` }}
          >
            <div className="overlay">
              <div className="stack-tag">{item.tag}</div>
              <h3 className="stack-title">{item.title}</h3>
              <p className="stack-subn">{item.subtitle}</p>
              <p className="stack-rate">
                <strong ><span className="success">Success rate:</span></strong><br className="next"/>
                {item.successRate}
              </p>
              <button className="stack-learn">
                <img src={require("../assets/arrows.png")} alt="arrow" className="arrow-icon" />
              </button>
            </div>
            <div className="stack-footer-scroll">
              <div className="scroll-content">{item.footer} · {item.footer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuperStack;
