import "./TechStackStyle.css";

import React from 'react';
import { SiDotnet, SiExpress, SiMysql, SiPostman, SiSublimetext } from "react-icons/si";
import { DiJavascript, DiHtml5, DiCss3 } from "react-icons/di";
import { FaPhp, FaReact, FaNode } from "react-icons/fa";
import { BsFiletypeSql, BsGithub } from "react-icons/bs";
import { BiLogoMongodb } from "react-icons/bi";
import { VscEditorLayout } from "react-icons/vsc";

const TechStackSection = () => {
  return (
    <div className="technology-stack">
      <div className="skill-card">
        <h3>Programming Languages</h3>
        <ul>
          <li className="list-item">
            <SiDotnet size={30} style={{ color: "#0078d7" }} />
            <span className="text">C#</span>
          </li>
          <li className="list-item">
            <FaPhp size={30} style={{ color: "#B0B3D6" }} />
            <span className="text">PHP</span>
          </li>
          <li className="list-item">
            <DiJavascript size={30} style={{ color: "#F0DB4F" }} />
            <span className="text">JavaScript</span>
          </li>
        </ul>
      </div>
      <div className="skill-card">
        <h3>Web Development</h3>
        <ul>
        <li className="list-item">
            <DiHtml5 size={30} style={{ color: "#e34c26" }} />
            <span className="text">HTML5</span>
          </li>
          <li className="list-item">
            <DiCss3 size={30} style={{ color: "#2965f1" }} />
            <span className="text">CSS3</span>
          </li>
          <li className="list-item">
            <FaReact size={30} style={{ color: "#61dbfb" }} />
            <span className="text">React.js</span>
          </li>
          <li className="list-item">
            <FaNode size={30} style={{ color: "#68A063" }} />
            <span className="text">Node.js</span>
          </li>
          <li className="list-item">
            <SiExpress size={21} style={{ color: "#fff" }} />
            <span className="text">Express.js</span>
          </li>
        </ul>
      </div>
      <div className="skill-card">
        <h3>Database Management</h3>
        <ul>
        <li className="list-item">
            <BsFiletypeSql size={20} style={{ color: "#fff" }} />
            <span className="text">T-SQL</span>
          </li>
          <li className="list-item">
            <SiMysql size={30} style={{ color: "#00758f" }} />
            <span className="text">MySQL</span>
          </li>
          <li className="list-item">
            <BiLogoMongodb size={30} style={{ color: "#3FA037" }} />
            <span className="text">MongoDB</span>
          </li>
        </ul>
      </div>
      <div className="skill-card">
        <h3>Version Control</h3>
        <ul>
          <li className="list-item">
            <BsGithub size={25} style={{ color: "#4078c0 " }} />
            <span className="text">GitHub</span>
          </li>
        </ul>
      </div>
      <div className="skill-card">
        <h3>Tools</h3>
        <ul>
        <li className="list-item">
            <VscEditorLayout size={25} style={{ color: "#0078d7" }} />
            <span className="text">VS Code</span>
          </li>
          <li className="list-item">
            <SiSublimetext size={25} style={{ color: "#a6e22e" }} />
            <span className="text">Sublime Text</span>
          </li>
          <li className="list-item">
            <SiPostman size={25} style={{ color: "#ef5b25" }} />
            <span className="text">Postman</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default TechStackSection