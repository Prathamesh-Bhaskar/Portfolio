import React from 'react';
import './ProjectsSection.css';


const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    date: "Jan 2024",
    image: "https://via.placeholder.com/400x200",
    techStack: ["React", "Node.js", "MongoDB", "Redux"],
    description: "A full-stack e-commerce platform with features like user authentication, product management, cart functionality, and payment integration."
  },
  {
    id: 2,
    title: "AI Image Generator",
    date: "Dec 2023",
    image: "https://via.placeholder.com/400x200",
    techStack: ["Python", "FastAPI", "React", "TensorFlow"],
    description: "An AI-powered image generation tool that creates unique images based on text descriptions using deep learning models."
  },
  {
    id: 3,
    title: "Task Management System",
    date: "Nov 2023",
    image: "https://via.placeholder.com/400x200",
    techStack: ["React", "TypeScript", "Firebase", "Material-UI"],
    description: "A collaborative task management system with real-time updates, team workspace, and progress tracking features."
  }
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="timeline">
        {projects.map((project) => (
          <div key={project.id} className="timeline-item">
            <div className="timeline-content">
              <div className="timeline-date">{project.date}</div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
              />
              <h3 className="project-title">{project.title}</h3>
              <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;