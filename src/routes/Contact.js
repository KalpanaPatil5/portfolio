import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import HeroProject from '../components/HeroProject';
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <Navbar />

      <HeroProject heading="CONTACT" text=""/>

      <ContactForm />

      <Footer />
    </div>
  )
}

export default Contact