import React, { useState, useEffect } from "react";
import './DroneEngineering.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import bgImage from '../assets/dronebg.png';
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
import nineseven from "../assets/97.png";
import eigth from "../assets/88.png";
import nineone from "../assets/91.png";




const modules = [
  { title: "Paper Planes and Aerodynamics", content: "Learn the basics of flight using paper planes and aerodynamics." },
  { title: "Introduction to Drones", content: "Understand drone parts, types, and functionality." },
  { title: "Building and Testing the Drone", content: "Step-by-step drone assembly and flight tests." },
  { title: "Introduction to Sensors", content: "Overview of sensors used in drones." },
  { title: "Magnetometer and Barometer", content: "Dive deep into orientation and altitude sensors." },
  { title: "Understanding the Framework", content: "Learn the software framework that controls drones." },
  { title: "Project Week", content: "Build and fly your own drone in the final week." }
];

const DroneEngineering = () => {
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
    const next = now + 48 * 60 * 60 * 1000; // 48 hours in ms
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

    return () => clearInterval(interval);
  }, []);





  
  return (
    <>
      <Navbar />
      <div className='dronebody'>
        <div
          className="drone-engineering-section"
          style={{
            backgroundImage: `linear-gradient(to right,rgba(35, 33, 33, 0.6),rgba(51, 28, 90, 0.6)), url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="drone-tag">
            <img src={bulbIcon} alt="Bulb Icon" className="drone-tag-icon" />
            For Innovators
          </div>
          <h1 className="drone-title">
            Design, Build & Launch Your Own Drones with Our{' '}
            <span className="highlight">Drone Engineering Program.</span>
          </h1>
          <p className="drone-description">
            Dive into aerodynamics, hardware, and flight systems—build drones that actually fly.
          </p>

          <div className="drone-cta-buttons">
            <button className="drone-outline-btn">Build it</button>
            <button className="drone-outline-btn">Fly it</button>
            <button className="drone-outline-btn">Own it</button>
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
              <h2>97<span>%</span></h2>
              <p>Completion rate <br />for our 1:1 Program.</p>
              <img src={nineseven} className="nineseven"/>
            </div>
            <div className="stat-card">
              <h2>91<span>%</span></h2>
              <p>Of participants report<br /> high engagement</p>
              <img src={nineone} className="nineone"/>
            </div>
            <div className="stat-card">
              <h2>88<span>%</span></h2>
              <p>Of participants stay <br />with their company.</p>
              <img src={eigth} className="eight"/>
            </div>
          </div>







        <div className="drone-info-section">
          <div className="drone-info-left">



            <div>
            <h2 className="drone-info-heading">
              Advanced <span>Growth</span> Strategy
            </h2>

            <p className="drone-info-para">
              Skipperx Drone Engineering Program helps you to master drone design, electronics, aerodynamics,
              and real-time flight control.
            </p>
            <p className="drone-info-para1">
              You’ll gain practical skills in assembling and launching drones
              preparing you for careers in aerospace, defense, & innovation-driven industries.
            </p>
          </div>

           

           <div className="skilllist-section">
            <h3>Skills you will gain with this path</h3>
            <div className="skills-tags">
              <span>Drone Design</span>
              <span>Aerodynamics</span>
              <span>Aviation</span>
              
              <span>Soldering</span>
              <span>Electronics Integration</span>
              <span>Battery Management</span>
              <span>FPV Systems</span>
              <span>Flight Control</span>
              <span>Embedded Programming</span>
              <span>GPS Navigation</span>
              <span>Microcontroller Configuration</span>
              
              <span>Sensor Calibration</span>
              <span>PID Tuning</span>
              
              
            </div>
          </div>   









            <div className="drone-info-stats">
              <h2 className="drone-head-ing">
                    Mentors
              </h2>
              {[
                { count: '50,000+', label: 'Mentees trained' },
                { count: '2 Months', label: 'Duration' },
                { count: '10+', label: 'Industry Experts' }
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
              <div className="drone-testimonial-person">
                <img src={require('../assets/droneashish.png')} alt="Ashish Singhal" />
                <div className="drone-testimonial-name">
                  Ashish Singhal <br />
                  <strong>Deloitte.</strong>
                </div>
              </div>

              <div className="drone-testimonial-quote">
                <p>
                  <em>
                    "The Drone Engineering Program at Skipper exceeded my expectations. It offered a strong balance of theory and practical work. I especially enjoyed assembling my own drone and testing its flight capabilities.
                    <br /><br />
                    This experience has equipped me with valuable skills I can apply in multiple industries."
                  </em>
                </p>
              </div>
            </div>
            




            <div className="drone-built-section">
              <h2>This is <span className="highlight">built</span> for</h2>
              <div className="drone-built-carousel">
                <div className="drone-built-track">
                  {[
                    { tag: 'Aviation', title: 'Aerospace Engineering', desc: 'for designing and testing aerial systems.' },
                    { tag: 'Security', title: 'Defense & Surveillance', desc: 'for drone-based reconnaissance and security operations.' },
                    { tag: 'Relief', title: 'Disaster Management', desc: 'Supporting rescue missions, damage assessment, and supply delivery.' },
                    { tag: 'Media', title: 'Filmmaking', desc: 'capturing cinematic shots and live coverage, on air.' },
                    { tag: 'Agriculture', title: 'AgroTech', desc: 'using drones for crop monitoring and precision farming.' },
                    { tag: 'Logistics', title: 'Parcel Delivery', desc: 'enabling last-mile drone-based delivery systems.' },
                    { tag: ' Conservation', title: 'Environmental Research', desc: 'Tracking wildlife, mapping terrains, and monitoring climate impact.' }
                  ].map((item, i) => (
                    <div className="drone-built-card" key={i}>
                      <span className="built-tag">{item.tag}</span>
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
            <div className="drone-pricing-card">
              <h2>Master Drone Engineering Program </h2>

              <ul className="drone-features-list">
                <li><span className="tickmark">&#10004;</span> Hands on Drone building</li>
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
                  <span className='top'>4000+ members has already completed this Program</span>
                </div>
              </div>

              <button className="drone-pricing-btn" onClick={handlePricingClick}>Start Learning</button>
            </div>

          )}





         {showForm && (
          <div className={`drone-form-wrapper ${showForm ? 'visible' : 'hidden'}`}>
           <div className="drone-form">
            <div className="drone-form-card">
              <h3 className="drone-form-title">Master Drone Engineering Program</h3>

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

                <button type="submit" className="form-submit-btn">Start Learning</button>
              </form>
            </div>
           </div>
          </div>
         )}



          </div>
        </div>












        <div className="drone-offer-section">
          <h2 className="offer-heading">Biggest Price Drop Yet</h2>
          
          <div className="offer-price-box">
            <span className="offer-icon">⚡</span>
            <span className="offer-old-price">₹24,999/-</span>
            <span className="offer-new-price">₹22,999/-</span>
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











    <div className="drone-parts">
      <div className="drone-parts-section"
      style={{ backgroundImage: `url(${droneBg})` }}
    >
      <div className="drone-content">
        <h2 className="section-title">
          Ready to Flex? Crack Open <br /> Your <span>Drone Kit</span>
        </h2>

        {/* Labels */}
        <div className="label label-1">
          <strong className="d1">1. Frame</strong><br />
          <span className="d1p">A quadcopter uses two clockwise (CW) and two counterclockwise (CCW) propellers.</span>
        </div>

        <div className="label label-2">
          <strong className="d1">2. Motor</strong><br />
          <span className="d1p">These are the powerhouses that give your quad the thrust to reach the intense speeds modern drones are reaching.</span>
        </div>

        <div className="label label-3">
          <strong className="d1">3. Battery</strong><br />
         <span className="d1p"> Li-po battery is a type of rechargeable battery that is commonly used throughout the RC hobby.</span>
        </div>

        <div className="label label-4">
          <strong className="d1">4. Propellers</strong><br />
          <span className="d1p">A quadcopter uses two clockwise (CW) and two counterclockwise (CCW) propellers.</span>
        </div>

        <div className="label label-5">
          <strong className="d1">5. Motor</strong><br />
          <span className="d1p">These are the powerhouses that give your quad the thrust to reach the intense speeds modern drones are reaching.</span>
        </div>

        {/* WhatsApp Button */}
        <a
          className="whatsapp-button"
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on WhatsApp
        </a>
      </div>
      
    </div>
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
              Seal the Skill with a <span className="highlight">Skipperx</span> Certificate
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
                question: "What skills will I gain from this program?",
                answer: "You'll gain practical knowledge in drone assembly, electronics, aerodynamics, and real-time flight control, along with sensor integration and troubleshooting."
              },
              {
                question: "Do I need prior experience with drones?",
                answer: "No prior experience is needed. This course is beginner-friendly and guides you step-by-step from basics to advanced topics."
              },
              {
                question: "Is there a certificate after completion?",
                answer: "Yes! You'll receive a SkipperX certificate upon successful completion of the program, which is industry-recognized."
              },
               {
                question: "Is there a certificate after completion?",
                answer: "Yes! You'll receive a SkipperX certificate upon successful completion of the program, which is industry-recognized."
              },
              {
                question: "Can I build a real flying drone?",
                answer: "Absolutely! You will build, test, and fly your own drone using the kit provided as part of the course."
              },
              {
                question: "How do I get support during the program?",
                answer: "You’ll have access to expert mentors, WhatsApp support groups, and community forums for all your questions."
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

export default DroneEngineering;
