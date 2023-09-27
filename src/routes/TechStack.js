import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import HeroProject from '../components/HeroProject';
import TechStackSection from "../components/TechStackSection";

const TechStack = () => {
    return (
        <div>
            <Navbar />

            <HeroProject heading="TECHNOLOGY STACK" text="Proficient in a versatile technology stack encompassing .Net, MERN stack enabling me to develop dynamic and innovative software solutions." />

            <TechStackSection />

            <Footer />
        </div>
    )
}

export default TechStack