import { Link } from "react-router-dom";
import "./AboutSectionStyle.css";

import React from 'react';
import Image1 from "../assets/images.jpg";
import Image2 from "../assets/image2.jpg";

const AboutSection = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I ?</h1>
            <p>I'm an aspiring software developer, constantly learning and eager to contribute to innovative projects and teams.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={Image1} alt="img" className="img"/>
                </div>

                <div className="img-stack bottom">
                    <img src={Image2} alt="img" className="img"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSection