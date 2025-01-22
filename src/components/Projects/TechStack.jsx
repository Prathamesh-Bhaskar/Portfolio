import React from 'react';

const TechStack = ({ technologies }) => {
  return (
    <div className="tech-stack">
      {technologies.map((tech, index) => (
        <span key={index} className="tech-chip">
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechStack;