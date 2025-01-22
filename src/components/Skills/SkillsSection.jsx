import React from "react";
import {
  SiCplusplus,
  SiCss3,
  SiFastapi,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPython,
  SiReact,
  SiRedux,
  SiTeamspeak,
  SiCodewars,
} from "react-icons/si";
import { GiBrain } from "react-icons/gi";
import "./SkillsSection.css";
import image1 from "../public/prathamesh.png";
import PhysicsEngine from "../PhysicsEngine/PhysicsEngine";

const SkillsSection = () => {
  const skillRows = [
    [
      { name: "React", icon: <SiReact className="profile-tech-icon" /> },
      { name: "Redux", icon: <SiRedux className="profile-tech-icon" /> },
      { name: "FastAPI", icon: <SiFastapi className="profile-tech-icon" /> },
      { name: "SQL", icon: <SiMysql className="profile-tech-icon" /> },
    ],
    [
      { name: "Python", icon: <SiPython className="profile-tech-icon" /> },
      {
        name: "Machine Learning",
        icon: <GiBrain className="profile-tech-icon" />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="profile-tech-icon" />,
      },
    ],
    [
      { name: "C++", icon: <SiCplusplus className="profile-tech-icon" /> },
      { name: "HTML", icon: <SiHtml5 className="profile-tech-icon" /> },
      { name: "CSS", icon: <SiCss3 className="profile-tech-icon" /> },
    ],
    [
      { name: "Teamwork", icon: <SiTeamspeak className="profile-tech-icon" /> },
      {
        name: "Problem Solving",
        icon: <SiCodewars className="profile-tech-icon" />,
      },
    ],
  ];

  return (
    <div className="container">
      <section className="skills-section">
        <h1 className="skills-title">Skills</h1>
        <p className="skills-description">I can say I'm quite good at</p>
        <div className="skills-grid">
          {skillRows.map((row, rowIndex) => (
            <div key={rowIndex} className="skills-row">
              {row.map((skill, index) => (
                <span key={index} className="skills-chip">
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SkillsSection;
