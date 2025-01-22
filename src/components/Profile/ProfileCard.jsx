import React from 'react';
import { FaWhatsapp, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import './ProfileCard.css';
import image1 from "../public/im2.jpg"

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-text">
        <h1 className="greeting">Hey there, I'm</h1>
        <h2 className="name">Prathamesh Bhaskar</h2>
        <TypeAnimation
          sequence={[
            'Full Stack Developer',
            2000,
            'Quick Learner, Proactive Problem Solver',
            2000,
          ]}
          wrapper="h2"
          repeat={Infinity}
          className="subtitle"
        />
        <p className="description">
          I am a student, currently studying at Vishwakarma Institute of Information Technology, Pune (B-Tech 2025).
          <br />
          I am interested in Development and always ready to contribute to a project that could help solve a problem.
          <br />
          I am proficient in ReactJS, FastAPI, MySQL, Data Structures, and more.
        </p>
        <div className="social-icons">
          <a href="https://wa.me/" className="icon" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a href="mailto:example@example.com" className="icon" target="_blank" rel="noreferrer">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/prathamesh-bhaskar-9b738822a/" className="icon" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="profile-image">
        <img src={image1} alt="Profile" className="image" />
      </div>
    </div>
  );
};

export default ProfileCard;