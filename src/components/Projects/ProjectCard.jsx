import React, { useState } from "react";
import TechStack from "./TechStack";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const ProjectCard = ({ project, isEven }) => {
  
  const [isHovered, setIsHovered] = useState(false);

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, staggerChildren: 0.1 },
    },
  };

  return (
    <div
      className={`timeline-item ${isEven ? "timeline-right" : "timeline-left"}`}
    >
      <motion.div
        className="timeline-content"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="timeline-date">{project.date}</div>

        <div className="project-card-container">
          <div className="project-image-container">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <TechStack technologies={project.techStack} />
              <p className="project-description text-gray-200 mb-4">
                {project.description}
              </p>

              {project.bulletPoints && project.bulletPoints.length > 0 && (
                <ul className="bullet-points text-gray-300 mb-4">
                  {project.bulletPoints.map((point, index) => (
                    <li key={index} className="mb-1">
                      {point}
                    </li>
                  ))}
                </ul>
              )}

              <motion.div
                className="project-buttons flex gap-4"
                variants={linkVariants}
                initial="hidden"
                animate={isHovered ? "visible" : "hidden"}
              >
                {project.liveLink && (
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button live-link flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                    variants={linkVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="button-icon" />
                    Live Link
                  </motion.a>
                )}
                {project.githubLink && (
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button github-link flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                    variants={linkVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="button-icon" />
                    GitHub
                  </motion.a>
                )}
              </motion.div>
            </div>
          </div>
          {/* Title below the project card */}
          <motion.h3
            className="project-title-below text-2xl font-bold mt-4 text-center text-black"
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            {project.title}
          </motion.h3>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
