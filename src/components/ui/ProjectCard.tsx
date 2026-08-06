import React, { useState } from 'react';
import { Project, AppAction } from '../../types';

interface ProjectCardProps {
  project: Project;
  isHovered: boolean;
  dispatch: React.Dispatch<AppAction>;
}

export function ProjectCard({ project, isHovered, dispatch }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <article
      className={`project-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={() => dispatch({ type: 'SET_HOVERED_PROJECT', payload: project.id })}
      onMouseLeave={() => dispatch({ type: 'SET_HOVERED_PROJECT', payload: null })}
    >
      {/* Card-in-card image container */}
      <div className="project-card-image">
        <div className="project-card-image-inner">
          {project.image && !imageError ? (
            <img
              src={project.image}
              alt={project.alt ?? project.title}
              className="project-card-img"
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="project-emoji">{project.emoji}</span>
          )}
        </div>
      </div>

      <div className="project-card-content">
        <div className="project-card-top">
          <span className="project-year">{project.year}</span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-subtitle">{project.subtitle}</p>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
      <div className="project-arrow">↗</div>
    </article>
  );
}
