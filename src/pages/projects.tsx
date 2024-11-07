// ProjectCard.jsx
import React from "react";
import "./ProjectCard.css";

const ProjectCard = () => {
  const project = {
    image: "/path/to/your/image.jpg",
    title: "Photo Naming Assistance",
    description:
      "AI-powered project that helps users assign clear, descriptive names to photos for efficient organization and easy retrieval.",
    techStack: ["python", "chat-gpt"],
    link: "https://your-project-url.com",
  };

  return (
    <div className="project-card">
      <div className="image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="tech-stack">
          {project.techStack.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <button
          className="view-more-btn"
          onClick={() => (window.location.href = project.link)}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
