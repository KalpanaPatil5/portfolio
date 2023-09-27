import "./ProjectCardsStyle.css";

import React from 'react';
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const ProjectCards = (props) => {
    return (
        <div className="project-card">
            <img src={props.img_src} alt="project-img" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.desc}</p>
                <div className="pro-btn">
                    <NavLink to={props.url} target="_blank" className="btn">
                        <FaGithub size={25} style={{ color: "#000", marginRight: "1rem" }} />
                        View</NavLink>
                </div>
            </div>
        </div>
    )
}

export default ProjectCards