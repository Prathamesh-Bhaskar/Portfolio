import React from "react";
import "./App.css";
import ProfileCard from "./components/Profile/ProfileCard";
import ProjectsSection from "./components/Projects/ProjectsSection";
import Header from "./components/Header/Header";
import SkillsSection from "./components/Skills/SkillsSection";

// Import icons
const techIcons = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/180px-HTML5_logo_and_wordmark.svg.png",
    top: 3,
    left: 3,
    delay: 0,
    animationDuration: 15,
    rotationDelay: 3,
  },
  {
    src: "https://res.cloudinary.com/daavjmge8/image/upload/v1737613608/css_kvkern.png",
    top: 7,
    left: 12,
    delay: 1,
    animationDuration: 12,
    rotationDelay: 5,
  },
  {
    src: "https://res.cloudinary.com/daavjmge8/image/upload/v1737613609/js_cynarz.png",
    top: 25,
    left: 30,
    delay: 2,
    animationDuration: 18,
    rotationDelay: 7,
  },
  {
    src: "https://res.cloudinary.com/daavjmge8/image/upload/v1737613615/react_qgnvm1.png",
    top: 15,
    left: 62 ,
    delay: 3,
    animationDuration: 14,
    rotationDelay: 2,
  },
  {
    src: "https://res.cloudinary.com/daavjmge8/image/upload/v1737613609/nextjs_yzujzg.png",
    top: 28,
    left: 15,
    delay: 4,
    animationDuration: 16,
    rotationDelay: 4,
  },
  {
    src: "https://res.cloudinary.com/daavjmge8/image/upload/v1737613615/tailwindcss_o2ifkj.png",
    top: 19,
    left: 77,
    delay: 5,
    animationDuration: 20,
    rotationDelay: 6,
  },
  {
    src: "https://res.cloudinary.com/daavjmge8/image/upload/v1737613608/git_wcvokd.png",
    top: 3,
    left: 81,
    delay: 1,
    animationDuration: 15,
    rotationDelay: 8,
  },
  {
    src: "https://res.cloudinary.com/daavjmge8/image/upload/v1737613609/github_yiumxo.png",
    top: 21,
    left: 18,
    delay: 2,
    animationDuration: 13,
    rotationDelay: 9,
  },
  {
    src: "https://res.cloudinary.com/daavjmge8/image/upload/v1737613610/nodejs_rnir9r.png",
    top: 21,
    left: 68,
    delay: 3,
    animationDuration: 17,
    rotationDelay: 10,
  },
  {
    src: "https://res.cloudinary.com/daavjmge8/image/upload/v1737613602/python2_ukqznh.png",
    top: 17,
    left: 8,
    delay: 5,
    animationDuration: 16,
    rotationDelay: 9,
  },
  {
    src: "https://res.cloudinary.com/daavjmge8/image/upload/v1737613601/c_sn3awg.png",
    top: 13,
    left: 16,
    delay: 0,
    animationDuration: 15,
    rotationDelay: 13,
  },
  {
    src: "https://res.cloudinary.com/daavjmge8/image/upload/v1737613601/firebase2_fspq9q.png",
    top: 34,
    left: 65,
    delay: 1,
    animationDuration: 14,
    rotationDelay: 14,
    
  },
  {
    src: "https://res.cloudinary.com/daavjmge8/image/upload/v1737613602/postgres2_zzzhjp.png",
    
    top: 15,
    left: 92,
    delay: 2,
    animationDuration: 16,
    rotationDelay: 4,
  },
  {
    src: "https://res.cloudinary.com/daavjmge8/image/upload/v1737613602/rust_runknx.png",
    top: 11,
    left: 3,
    delay: 3,
    animationDuration: 13,
    rotationDelay: 6,
  },
  {
    src: "https://res.cloudinary.com/daavjmge8/image/upload/v1737613602/aws_lv8gvy.png",
    top: 9,
    left: 84,
    delay: 4,
    animationDuration: 19,
    rotationDelay: 8,
  },
  {
    src: "https://res.cloudinary.com/daavjmge8/image/upload/v1737613608/docker_jne0y6.png",
    top: 15,
    left: 30,
    delay: 5,
    animationDuration: 15,
    rotationDelay: 3,
  },
  {
    src: "https://res.cloudinary.com/daavjmge8/image/upload/v1737613600/ts2_ajvhnj.png",
    top: 25,
    left: 76,
    delay: 0,
    animationDuration: 17,
    rotationDelay: 5,
  },
  {
    src: "https://res.cloudinary.com/daavjmge8/image/upload/v1737614851/kubernetes_zkhjjq.png",
    top: 14,
    left: 78,
    delay: 1,
    animationDuration: 21,
    rotationDelay: 7,
  },
  {
    src: "https://res.cloudinary.com/daavjmge8/image/upload/v1737613602/solidity_removebg_dqm3ay.png",
    top: 24,
    left: 3,
    delay: 2,
    animationDuration: 16,
    rotationDelay: 9,
  },
  {
    src: "https://res.cloudinary.com/daavjmge8/image/upload/v1737613602/ethereum_tml6xi.png",
    top: 6,
    left: 95,
    delay: 3,
    animationDuration: 14,
    rotationDelay: 10,
  },
  {
    src: "https://res.cloudinary.com/daavjmge8/image/upload/v1737613600/tensorflow_kraqli.png",
    top: 22,
    left: 88 ,
    delay: 3,
    animationDuration: 17,
    rotationDelay: 10,
  },
  {
    src: "https://res.cloudinary.com/daavjmge8/image/upload/v1737613601/azure_ix1knb.png",
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
