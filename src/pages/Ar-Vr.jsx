import React, { useState, useEffect, useRef} from "react";
import './Ar-Vr.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bgImage from '../assets/arvr-hero.png';
import bulbIcon from '../assets/holding-bulb.png';
import harish from '../assets/harisha.jpg';
import sai from '../assets/sai.jpg';
import hari from '../assets/harih.jpg';
import sakshi from '../assets/saksh.png';
import certificateDisplay from "../assets/dcerti.png";
import droneBg from "../assets/drone-bg-image.png";
import suresh from "../assets/suresh.png";
import soumya from "../assets/soumya.png";
import vishal from "../assets/vishal.png";
import faqarrow from "../assets/faqarrow.png";
import brochureImage from "../assets/drone-brochure.png";
import nineeight from "../assets/98.png";
import nineseven from "../assets/97.png";
import eightseven from "../assets/87.png";
import arvrreviewlogo from "../assets/arvr-r-logo.png";






const modules = [
  { title: " Introduction to Unity and 3D Basics", content: "Learn the basics of flight using paper planes and aerodynamics." },
  { title: "Unity Basics and C# Scripting", content: "Understand drone parts, types, and functionality." },
  { title: "Physics, UI, and Effects", content: "Step-by-step drone assembly and flight tests." },
  { title: "Lighting and Advanced Unity Features", content: "Overview of sensors used in drones." },
  { title: "Introduction to Vuforia Engine", content: "Dive deep into orientation and altitude sensors." },
  { title: "Advanced Vuforia Features", content: "Learn the software framework that controls drones." },
  { title: " Introduction to WebXR and A-Frame", content: "Overview of sensors used in drones." },
  { title: "Advanced WebXR and Capstone Project", content: "Build and fly your own drone in the final week." }
];

const ArVr = () => {
  const scrollItems = [
    "Business Analytics",
    "Human Resource",
    "Finance",
    "Fashion Designing",
    "Marketing",
    "Blockchain",
    "UI/UX",
    "Cyber Security"
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const cardRef = useRef(null);
  const sectionRef = useRef(null);
  const offerRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);
  const [offsetTop, setOffsetTop] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  
  const [showForm, setShowForm] = useState(false);

  const handlePricingClick = () => {
    setShowForm(true);
  };



  const getNextDeadline = () => {
  const savedDeadline = localStorage.getItem('droneOfferDeadline');
  const now = new Date().getTime();

  if (savedDeadline && Number(savedDeadline) > now) {
    return Number(savedDeadline);
  } else {
    const next = now + 48 * 60 * 60 * 1000; 
    localStorage.setItem('droneOfferDeadline', next);
    return next;
  }
  };

  const calculateTimeLeft = (deadline) => {
    const now = new Date().getTime();
    const difference = deadline - now;

    if (difference <= 0) {
      const next = now + 48 * 60 * 60 * 1000;
      localStorage.setItem('droneOfferDeadline', next);
      return calculateTimeLeft(next);
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      Days: String(days).padStart(2, '0'),
      Hours: String(hours).padStart(2, '0'),
      Minutes: String(minutes).padStart(2, '0'),
      Seconds: String(seconds).padStart(2, '0'),
    };
  };

  const [timer, setTimer] = useState({
    Days: '00',
    Hours: '00',
    Minutes: '00',
    Seconds: '00',
  });

  useEffect(() => {
    let deadline = getNextDeadline();

    const interval = setInterval(() => {
      const timeLeft = calculateTimeLeft(deadline);
      setTimer(timeLeft);
    }, 1000);
    



    const handleScroll = () => {
      if (!cardRef.current || !sectionRef.current || !offerRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionBottom = offerRef.current.getBoundingClientRect().top;
      const cardHeight = cardRef.current.offsetHeight;

      if (sectionTop <= 20 && sectionBottom > cardHeight + 40) {
        setIsFixed(true);
        setOffsetTop(20);
      } else {
        setIsFixed(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

     return () => clearInterval(interval);
    
 }, []);




  
  return (
    <>
      <Navbar />



      
      <div className='dronebody'>
        <div
          className="drone-engineering-section"
          style={{
            backgroundImage: `linear-gradient(to right,rgba(35, 33, 33, -0.6),rgba(51, 28, 90, -0.6)), url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="drone-tag">
            <img src={bulbIcon} alt="Bulb Icon" className="drone-tag-icon" />
            For Innovators
          </div>
          <h1 className="arvr-title">
            Create <span className="highlight">AR/VR experiences </span>  that redefine reality and set new standards.
        
          </h1>
          <p className="drone-description">
            Earn to design immersive experiences that blur the line between real and virtual.
          </p>

          <div className="drone-cta-buttons">
            <button className="drone-outline-btn">Create</button>
            <button className="drone-outline-btn">Code</button>
            <button className="drone-outline-btn">Design</button>
          </div>

          <button className="drone-start-btn">Start Learning</button>

          <div className="drone-scroll-wrapper">
            <div className="drone-scroll-track">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="drone-scroll-content">
                  {scrollItems.map((item, i) => (
                    <span key={`${index}-${i}`} className="drone-scroll-item">
                      {item} •&nbsp;
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>




      <div className="accredit">
        <div className="drone-accredit-section">
          
            
          
        </div>

      



          <div className="drone-stat-section">
            <div className="stat-card">
              <h2>98<span>%</span></h2>
              <p>Completion rate <br />for our 1:1 Program.</p>
              <img src={nineeight} className="nineseven"/>
            </div>
            <div className="stat-card">
              <h2>97<span>%</span></h2>
              <p>Of participants report<br /> high engagement</p>
              <img src={nineseven} className="nineone"/>
            </div>
            <div className="stat-card">
              <h2>87<span>%</span></h2>
              <p>Of participants stay <br />with their company.</p>
              <img src={eightseven} className="eight"/>
            </div>
          </div>







        <section className="drone-info-section" ref={sectionRef}>
          <div className="drone-info-left">



            <div>
            <h2 className="drone-info-heading">
              Advanced <span>Growth</span> Strategy
            </h2>

            <p className="drone-info-para">
              Skipper’s AR/VR Program helps you master 3D designs, spatial computing, immersive storytelling,and interaction design.
            </p>
            <p className="drone-info-para1">
              You’ll gain practical skills in building virtual environments and augmented 
              experiences—preparing you for careers in gaming, education, healthcare, and emerging tech industries.
            </p>
          </div>

           

           <div className="skilllist-section">
            <h3>Skills you will gain with this path</h3>
            <div className="skills-tags">
              <span>Rendering</span>
              <span>Modeling</span>
              <span>Visualization</span>
              <span>Optimization</span>
              <span>Prototyping</span>
              <span>Immersion</span>
              <span>Scripting</span>
              <span>Calibration</span>
              <span>Debugging</span>
              <span>Tracking</span>
              <span>Animation</span>
              <span>Projection</span>
              <span>Automation</span>
              <span>Mapping</span>
              <span>Experience</span>
              <span>Calibration</span>
              
              
              

              
              
            </div>
          </div>   









            <div className="drone-info-stats">
              <h2 className="drone-head-ing">
                    Mentors
              </h2>
              {[
                { count: '42,000+', label: 'Mentees trained' },
                { count: '2 Months', label: 'Duration' },
                { count: '7+', label: 'Industry Experts' }
              ].map((item, index) => (
                <div className="drone-stat-card" key={index}>
                  <div className="stat-icon">
                    <span>⚡</span>
                  </div>
                  <h4>{item.count}</h4>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>



           




            <div className="drone-testimonial-box">
              <h2 className="robot-heading">Learning That<span className="highlight"> Works </span> - Proven by People</h2>
              <div className="drone-testimonial-person">
                <img src={require('../assets/singh-arvr.png')} alt="Ashish Singhal" />
                <div className="drone-testimonial-name">
                  Shreyansh Singh <br />
                  <img src={arvrreviewlogo}  className="arvr-review-img" />
                </div>
              </div>

              <div className="arvr-testimonial-quote">
                <p>
                  <em>
                    "I was really impressed by Skipper’s AR/VR Engineering Program. The modules were well-organized, and mentors were always available to help and guied us in each and evry step. Building interactive virtual spaces and learning about spatial computing opened up so many creative possibilities for me.
                    <br /><br />
                    This program is perfect if you want to break into immersive tech."
                  </em>
                </p>
              </div>
            </div>
            




            <div className="arvr-built-section">
              <h2>This is <span className="highlight">built </span> for</h2>
              <div className="arvr-built-carousel">
                <div className="arvr-built-track">
                  {[
                    { tag: 'Entertainment', title: 'Interactive worlds', desc: 'Creating immersive play and storytelling experiences.' },
                    { tag: 'Education', title: 'Learning simulations', desc: 'Enabling realistic and engaging skill-building environments.' },
                    { tag: 'Healthcare', title: 'Medical visualization ', desc: 'aiding surgery planning and therapeutic treatments.' },
                    { tag: 'Retail ', title: 'Virtual try-ons ', desc: 'Helping customers preview products before purchasing.' },
                    { tag: 'Real Estate', title: ' Virtual walkthroughs  ', desc: 'Showcasing properties and designs remotely as user wants.' },
                    { tag: 'Automotive', title: 'Prototyping ', desc: 'improving design and maintenance processes included.' },
                    { tag: 'Tourism', title: 'Virtual tours  ', desc: 'bringing cultural and historic sites to life digitally' }
                    
                  ].map((item, i) => (
                    <div className="arvr-built-card" key={i}>
                      <span className="arvr-built-tag">{item.tag}</span>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>





          <div className="module-section">
            <div className="module-heading-wrapper">
              <div className="module-line-left" />
              <h2>
                What will you<span className="module-highlight"> learn?</span> 
              </h2>
              <div className="module-line-right" />
            </div>
            
            <div className="module-list">
              {modules.map((module, index) => (
                <div className="module-box" key={index}>
                  <div className="module-toggle" onClick={() => toggleAccordion(index)}>
                    <div>
                      <h4>MODULE {index + 1}</h4>
                      <p>{module.title}</p>
                    </div>
                    <span className={`toggle-icon ${activeIndex === index ? 'expanded' : ''}`}>
                      <img src={faqarrow} alt="toggle" className="toggle-img" />
                    </span>
                  </div>
                  {activeIndex === index && (
                    <div className="module-details">
                      <p>{module.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>






















            <div className="review-carousel-section">
              <h2 className="drone-review-title">Reviews</h2>
              <div className="review-carousel-wrapper">
                <div className="review-carousel-track">
                  {[
                    {
                      heading:"BOE at EMP Monitor",
                      name: "Parthiv Kumar",
                      role: "Cybersecurity",
                      review:
                        "I gained valuable knowledge and hands-on experience in various aspects of cybersecurity. One of the highlights of my internship was working on a minor project with a machine to identify vulnerabilities.",
                      avatar: sai,
                    },
                    {
                      heading:"BOE at EMP Monitor",
                      name: "Harish",
                      role: "Blockchain",
                      review:
                        "The course provided deep insights and practical exposure. The module on real-world drone integration was especially eye-opening.",
                      avatar: harish,
                    },
                    {
                      heading:"BOE aP Monitor",
                      name: "Sakshi",
                      role: "AI Research",
                      review:
                        "Exceptional mentorship and hands-on sessions! I now understand drone dynamics and automation better.",
                      avatar: sakshi,
                    },
                    {
                      heading:"BOE at EMP Monitor",
                      name: "Hari Krishna",
                      role: "IoT & Robotics",
                      review:
                        "Fantastic journey. Loved the combination of theory and lab work. My project now flies!",
                      avatar: hari,
                    },
                    {
                      heading:"BOE at EMP Monitor",
                      name: "Aditi Rao",
                      role: "Embedded Systems",
                      review:
                        "Comprehensive curriculum and well-guided support made the learning smooth and impactful.",
                      avatar: sakshi,
                    },
                  ].map((review, i) => (
                    <div className="review-slide" key={i}>
                      <h4>{review.heading}</h4>
                      <p><em>{review.review}</em></p>
                      <div className="review-footer">
                        <img src={review.avatar} alt={review.name} />
                        <div>
                          <strong className="review-name">{review.name}</strong><br />
                          <span className="review-namep">{review.role}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>



          </div>










         <div className="drone-info-right">
          {!showForm && (
            
            <div
              ref={cardRef}
              className="drone-pricing-card"
              style={{
                position: isFixed ? "fixed" : "sticky",
                top: isFixed ? `0px` : "0px",
                zIndex: 10,
              }}
            >
              <h2>Master AR VR Program</h2>
              <ul className="drone-features-list">
                <li><span className="tickmark">&#10004;</span> Innovation for professional growth</li>
                <li><span className="tickmark">&#10004;</span> Certification included</li>
                <li><span className="tickmark">&#10004;</span> Industry relevant skills</li>
                <li><span className="tickmark">&#10004;</span> Hands on learning</li>
              </ul>
              <div className="price">Price</div>
              <div className="drone-price-section">
                <div className="drone-original-price">₹24,999</div>
                <div className="drone-current-price">₹20,000</div>
              </div>
              <div className="trust-footer-drone">
                <div className="avatarsdrone">
                  <img src={harish} alt="avatar" />
                  <img src={hari} alt="avatar" />
                  <img src={sakshi} alt="avatar" />
                  <img src={sai} alt="avatar" />
                  <span className="top">
                    7000+ members have already completed this Program
                  </span>
                </div>
              </div>
              <button
                className="drone-pricing-btn"
                onClick={handlePricingClick}
              >
                Start Learning
              </button>
            </div>
          )}

          {showForm && (
            <div
              className={`drone-form-wrapper ${
                showForm ? "visible" : "hidden"
              }`}
            >
              
              <div className="drone-form">
              <div
                  ref={cardRef}
                  className="drone-form-card"
                  style={{
                    position: isFixed ? "fixed" : "sticky",
                    top: isFixed ? `0px` : "0px",
                    zIndex: 10,
                  }}
                >
                  <h3 className="drone-form-title">
                    Master AR VR Program
                  </h3>
                  <form className="drone-form-fields">
                    <input type="text" placeholder="First Name*" required />
                    <input type="email" placeholder="E-mail*" required />
                    <input type="text" placeholder="College name*" required />
                    <select required>
                      <option value="">Interest*</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                    <div className="phone--input">
                      <span className="country--code">+91</span>
                      <input type="tel" placeholder="XXXXXXXXXX" required />
                    </div>
                    <button
                      type="submit"
                      className="form-submit-btn"
                    >
                      Start Learning
                    </button>
                  </form>
                </div>
              </div>
            </div>
         )}



          </div>
        </section>












        <div className="drone-offer-section" >

          <h2 className="offer-heading" ref={offerRef}>Biggest Price Drop Yet</h2>
          
          <div className="offer-price-box" >
            <span className="offer-icon">⚡</span>
            <span className="offer-old-price">₹24,999/-</span>
            <span className="offer-new-price">₹20,000/-</span>
          </div>

          <p className="offer-subtext">The Clock’s Ticking — Ends In</p>

          <div className="offer-timer">
            {Object.entries(timer).map(([label, value], i) => (
              <div className="timer-unit" key={i}>
                <div className="digit-pair">
                  {value.split('').map((digit, j) => (
                    <div className="timer-box" key={j}>{digit}</div>
                  ))}
                </div>
                <p>{label}</p>
              </div>
            ))}
          </div>

          <button className="offer-btn">Apply Now</button>
        </div>











    







        <div className="cert-drone">
         <div className="certificate-display-section">
            <div className="certificate-image-wrapper">
          <img
            src={certificateDisplay}
            alt="Skipper Certificate"
            className="certificate-background-img"
            
          />
          <div className="certificate-overlay">
            <h2 className="certificate-title">
              Seal the Skill with a <span className="highlight">SkipperX </span> Certificate
            </h2>
            <p className="certificate-subtext">
              Yes! You will be certified for this program.
            </p>
          </div>
        </div>
        </div>
        </div>



      <div className="drone-brochure">
        <div
          className="brochure-banner"
          style={{ backgroundImage: `url(${brochureImage})` }}
        >
          <div className="brochure-overlay">
            <h3>
              Want the Deep Dive? Grab the <span>Brochure</span>
            </h3>
            <p>
              From what you’ll learn to where it can take you — it’s all inside.
            </p>
            <button className="download-brochure-btn">Download Brochure</button>
          </div>
        </div>
       </div>








        <div className="skippers-section">
          <div className="faq-header">
            <hr className="faq-leftt"/>
            <h2><span className="dronehighlight">Skippers</span> of the Month</h2>
            <hr className="faq-rightt"/>
          </div>
          <p className="faq-subtext">Insights from those who’ve walked the path you're about to take.</p>

        <div className="skippers-podium-wrapper">
          
          <div className="podium-bg" />

          
          <div className="skipper-box silver">
            <img src={soumya} alt="Soumya Verma" className="skipper-img" />
            <h4>Soumya Verma</h4>
            <p>Silver Medalist</p>
            <div className="coins-earned1">
              <span className="coin-icon">⚡</span>
              <span className="coin-text">20345 Coins earned</span>
            </div>
          </div>

          
          <div className="skipper-box gold">
            <img src={suresh} alt="Suresh Sharma" className="skipper-img" />
            <h4>Suresh Sharma</h4>
            <p>Gold Medalist</p>
            <div className="coins-earned2">
              <span className="coin-icon">⚡</span>
              <span className="coin-text">20345 Coins earned</span>
            </div>
          </div>

          
          <div className="skipper-box bronze">
            <img src={vishal} alt="Vishal Pal" className="skipper-img" />
            <h4>Vishal Pal</h4>
            <p>Bronze Medalist</p>
            <div className="coins-earned3">
              <span className="coin-icon">⚡</span>
              <span className="coin-text">20345 Coins earned</span>
            </div>
          </div>
        </div>
      </div>





       <div className="faq-section">
          <div className="faq-header">
            <hr className="faq-leftt"/>
            <h2>Frequently Asked Question</h2>
            <hr className="faq-rightt"/>
          </div>
          <p className="faq-subtext"></p>
          
          <div className="faq-list">
            {[
              {
                question: "Is technical support available if I encounter issues with the online platform?",
                answer: "Our dedicated support team is just a call or an email away. Reach out to us at 8792243559 / 8147081557 or support@corizo.in from Monday to Saturday, 11 AM to 8 PM, for any assistance you need!"
              },
              {
                question: "Are there discussion forums or community platforms for students?",
                answer: "Join the vibrant community on WhatsApp! Engage, discuss, and grow with fellow learners and mentors by your side."
              },
              {
                question: "Is there a pre-registration option available?",
                answer: "Get ahead of the curve with a nominal pre-registration fee of ₹1000. Secure your spot and start transforming your career trajectory!"
              },
               {
                question: "What is the refund policy?",
                answer: "Our courses are crafted with care and commitment, and as such, we do not offer refunds. We believe in the value and quality of our educational services!"
              },
              {
                question: "How much time do I need to dedicate to the course each week?",
                answer: "Whether you’re sprinting or pacing yourself, choose what works for you! We offer both self-paced and mentor-led formats to match your learning style."
              },
              {
                question: "What are the timings of the classes ?",
                answer: "Classes are tailored for convenience, kicking off after 6 PM to suit your busy schedules and commitments. Dive in when you're ready to learn!"
              }
            ].map((item, index) => (
              <div className="faq-card" key={index}>
                <div className="faq-question" onClick={() => toggleAccordion(index + 100)}>
                  <h4>{item.question}</h4>
                  <span className={`accordion-icon ${activeIndex === index + 100 ? 'open' : ''}`}><img src={faqarrow} alt="dropdown" className="faqarrow" /></span>
                </div>
                {activeIndex === index + 100 && (
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default ArVr;
