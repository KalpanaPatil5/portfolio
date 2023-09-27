import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import HeroProject from '../components/HeroProject';
import AboutSection from '../components/AboutSection';

const About = () => {
  return (
    <div>
      <Navbar />

      <HeroProject heading="ABOUT" text="Experienced software developer with a keen eye for detail and a commitment to staying at the forefront of technology trends, driving innovation in product development and user experience."/>
      
      <AboutSection />

      <Footer />
    </div>
  )
}

export default About