import "./HeroSectionStyle.css";

import React from 'react';
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <div className="hero">
            <div className="hero-img"></div>

            <div className="hero-content">
                <div className="hero-txt">
                    <p>HI, I am a <span className="animate-charcter">Full Stack Developer !</span></p>
                    <h1></h1>
                </div>

                <div className="hero-btn-container">
                    <div className="hero-btn">
                        <Link to="/project" className="btn"> Projects</Link>

                        <Link to="/contact" className="btn btn-light"> Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection