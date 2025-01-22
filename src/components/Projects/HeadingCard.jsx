import React from "react";

const HeadingCard = ({ project, isEven }) => {
  return (
    <div
      className={`timeline-heading ${
        isEven ? "timeline-right-heading" : "timeline-left-heading"
      }`}
    >
      <h3
        className="project-heading-title
      "
      >
        {project.title}
      </h3>
    </div>
  );
};

export default HeadingCard;
