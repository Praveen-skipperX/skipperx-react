// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import TermsAndConditions from './pages/t & c'
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import About from './pages/About';
import DroneEngineering from './pages/DroneEngineering';
import RobotEngineering from './pages/RobotEngineering';
import Login from './pages/login';
import Signup from './pages/signup';
import Contact from './pages/contact';




// Components


function App() {
  return (
    <Router>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/about" element={<About />} />
        <Route path="/t & c" element={<TermsAndConditions />} />
        <Route path="/Drone-Engineering" element={<DroneEngineering />} />
        <Route path="/Robot-Engineering" element={<RobotEngineering />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      
    </Router>
  );
}

export default App;
