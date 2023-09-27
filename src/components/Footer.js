import { FaGithub, FaHome, FaLinkedin, FaMailBulk } from "react-icons/fa";
import "./FooterStyle.css";

import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{ color: "white", marginRight: "2rem" }}/>
                    <div>
                        <p>Karnataka, India</p>
                    </div>
                </div>

                <div className="email">
                    <h4>
                        <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }}/>
                        kp95889@gmail.com
                    </h4>
                </div>
            </div>

            <div className="right">
                <h4>Get connected ...</h4>
                <div className="social">
                    <Link to="https://www.linkedin.com/in/kalpana-patil-87aa0025b/" target="_blank" rel="noopener noreferrer"> 
                        <FaLinkedin size={25} style={{ color: "#ccffff", marginRight: "1rem" }}/>
                    </Link>

                    <Link to="https://github.com/KalpanaPatil5" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={25} style={{ color: "#ccffff", marginRight: "1rem" }}/>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer