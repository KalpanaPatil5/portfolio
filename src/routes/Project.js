import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import HeroProject from '../components/HeroProject';
import Work from '../components/Work';

const Project = () => {
  return (
    <div>
      <Navbar />

      <HeroProject heading="PROJECTS" text="Some of my works"/>
      
      <Work />
      
      <Footer />
    </div>
  )
}

export default Project