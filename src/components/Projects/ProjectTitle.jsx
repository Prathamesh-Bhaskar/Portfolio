import React from 'react';
import './ProjectTitle.css';

const ProjectTitle = ({ title }) => {
  return (
    <div className="project-title-container">
      <h3 className="project-title-text">{title}</h3>
    </div>
  );
};

export default ProjectTitle; 