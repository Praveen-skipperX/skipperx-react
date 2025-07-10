// src/pages/Home.jsx
import React from 'react';

// Components for the home sections
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import TestimonialCarousel from '../components/TestimonialCarousel';
import EngineeringPrograms from '../components/EngineeringPrograms';
import SuperStack from '../components/SuperStack';
import CareerFormSection from '../components/CareerFormSection';
import SkippersAdvantage from '../components/SkippersAdvantage';
import LaunchSection from '../components/LaunchSection';
import BackedByBest from '../components/BackedByBest';
import WhyTrustUs from '../components/WhyTrustUs';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero />
      <TrustSection />
      <TestimonialCarousel />
      <EngineeringPrograms />
      <SuperStack />
      <CareerFormSection />
      <SkippersAdvantage />
      <LaunchSection />
      <BackedByBest />
      <WhyTrustUs />
      <Footer />
    </>
  );
};

export default Home;
