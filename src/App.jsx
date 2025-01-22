import React from "react";
import "./App.css";
import ProfileCard from "./components/Profile/ProfileCard";
import ProjectsSection from "./components/Projects/ProjectsSection";
import Header from "./components/Header/Header";
import SkillsSection from "./components/Skills/SkillsSection";

// Import icons
const techIcons = [
  {
    src: "src/components/public/icons/html.png",
    top: 3,
    left: 3,
    delay: 0,
    animationDuration: 15,
    rotationDelay: 3,
  },
  {
    src: "src/components/public/icons/css.png",
    top: 7,
    left: 12,
    delay: 1,
    animationDuration: 12,
    rotationDelay: 5,
  },
  {
    src: "src/components/public/icons/js.png",
    top: 25,
    left: 30,
    delay: 2,
    animationDuration: 18,
    rotationDelay: 7,
  },
  {
    src: "src/components/public/icons/react.png",
    top: 15,
    left: 62 ,
    delay: 3,
    animationDuration: 14,
    rotationDelay: 2,
  },
  {
    src: "src/components/public/icons/nextjs.png",
    top: 28,
    left: 15,
    delay: 4,
    animationDuration: 16,
    rotationDelay: 4,
  },
  {
    src: "src/components/public/icons/tailwindcss.png",
    top: 19,
    left: 77,
    delay: 5,
    animationDuration: 20,
    rotationDelay: 6,
  },
  {
    src: "src/components/public/icons/git.png",
    top: 3,
    left: 81,
    delay: 1,
    animationDuration: 15,
    rotationDelay: 8,
  },
  {
    src: "src/components/public/icons/github.png",
    top: 21,
    left: 18,
    delay: 2,
    animationDuration: 13,
    rotationDelay: 9,
  },
  {
    src: "src/components/public/icons/nodejs.png",
    top: 21,
    left: 68,
    delay: 3,
    animationDuration: 17,
    rotationDelay: 10,
  },
  {
    src: "src/components/public/icons/python2.png",
    top: 17,
    left: 8,
    delay: 5,
    animationDuration: 16,
    rotationDelay: 9,
  },
  {
    src: "src/components/public/icons/c++.png",
    top: 13,
    left: 16,
    delay: 0,
    animationDuration: 15,
    rotationDelay: 13,
  },
  {
    src: "src/components/public/icons/firebase2.png",
    top: 34,
    left: 65,
    delay: 1,
    animationDuration: 14,
    rotationDelay: 14,
    
  },
  {
    src: "src/components/public/icons/postgres2.png",
    
    top: 15,
    left: 92,
    delay: 2,
    animationDuration: 16,
    rotationDelay: 4,
  },
  {
    src: "src/components/public/icons/rust.png",
    top: 11,
    left: 3,
    delay: 3,
    animationDuration: 13,
    rotationDelay: 6,
  },
  {
    src: "src/components/public/icons/aws.png",
    top: 9,
    left: 84,
    delay: 4,
    animationDuration: 19,
    rotationDelay: 8,
  },
  {
    src: "src/components/public/icons/docker.png",
    top: 15,
    left: 30,
    delay: 5,
    animationDuration: 15,
    rotationDelay: 3,
  },
  {
    src: "src/components/public/icons/ts2.png",
    top: 25,
    left: 76,
    delay: 0,
    animationDuration: 17,
    rotationDelay: 5,
  },
  {
    src: "src/components/public/icons/kubernetes.png",
    top: 14,
    left: 78,
    delay: 1,
    animationDuration: 21,
    rotationDelay: 7,
  },
  {
    src: "src/components/public/icons/solidity removebg.png",
    top: 24,
    left: 3,
    delay: 2,
    animationDuration: 16,
    rotationDelay: 9,
  },
  {
    src: "src/components/public/icons/ethereum.png",
    top: 6,
    left: 95,
    delay: 3,
    animationDuration: 14,
    rotationDelay: 10,
  },
  {
    src: "src/components/public/icons/tensorflow.png",
    top: 22,
    left: 88 ,
    delay: 3,
    animationDuration: 17,
    rotationDelay: 10,
  },
  {
    src: "src/components/public/icons/azure.png",
    top: 25,
    left: 95,
    delay: 1,
    animationDuration: 14,
    rotationDelay: 14,
    
  }
];

const FloatingIcon = ({
  src,
  top,
  left,
  delay,
  animationDuration,
  rotationDelay,
}) => {
  return (
    <div
      className="floating-icon"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        animationDelay: `${delay}s`,
        "--animation-duration": `${animationDuration}s`,
        "--rotation-delay": `${rotationDelay}s`,
      }}
    >
      <img src={src} alt="tech icon" className="icon-image" />
    </div>
  );
};

function App() {
  return (
    <div className="app-container">
      <div className="background-icons">
        {techIcons.map((icon, index) => (
          <FloatingIcon key={index} {...icon} />
        ))}
      </div>

      <div className="main-content">
        <Header />
        <ProfileCard />
        <SkillsSection />
        <ProjectsSection />
      </div>
    </div>
  );
}

export default App;
