import React from "react";
import ProjectCard from "./ProjectCard";
import SpotifyPlayer from "./SpotifyPlayer";
import { projects } from "./projectsData";
import "./ProjectsSection.css";
import HeadingCard from "./HeadingCard";

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-divider"></div>
      <div className="timeline">
        {projects.map((project, index) => (
          <div key={project.id} className="timeline-wrapper">
            {index === 0 && (
              <div className="spotify-container">
                {/* <SpotifyPlayer /> */}
              </div>
            )}
            <ProjectCard project={project} isEven={index % 2 === 0} />
            {/* Add project title below the ProjectCard */}
            <HeadingCard
              project={project}
              isEven={index % 2 === 0}
            ></HeadingCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
