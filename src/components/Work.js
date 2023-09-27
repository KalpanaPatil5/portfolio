import "./ProjectCardsStyle.css";

import React from 'react';
import ProjectCards from "./ProjectCards";
import WorkCardData from "./WorkCardData";

const Work = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                {WorkCardData.map((value, index) => {
                    return(
                        <ProjectCards 
                        key={index}
                        img_src={value.img_src}
                        title={value.title}
                        desc={value.desc}
                        url={value.url}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Work