import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaInstagram,
} from "react-icons/fa6";
import "./Header.css";
import image1 from "../public/prathamesh.png";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>
          <img src={image1} alt="Logo" className="header-logo" />
          TECHNOMAD
        </h1>
        <nav>
          <a href="#apps">Memories</a>
          <a
            href="https://drive.google.com/file/d/16F8UFjkeV3mbglk_YNlZVGOR5Hb8BKkh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
      </div>
      <div className="header-right">
        <a
          href="https://github.com/Prathamesh-Bhaskar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/prathamesh-bhaskar-9b738822a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:example@mail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.hackerrank.com/profile/prathameshbhask2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCode />
        </a>
        <a
          href="https://www.instagram.com/prathamesh.bhaskar.90/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/Pratham04866774"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter />
        </a>
      </div>
    </header>
  );
}
export default Header;
