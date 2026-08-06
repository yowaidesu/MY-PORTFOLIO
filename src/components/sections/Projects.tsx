import React, { useRef, useState } from 'react';
import { Typography, Tag, Card, Row, Col, Button } from 'antd';
import { ArrowUpOutlined, LeftOutlined, RightOutlined, GithubOutlined } from '@ant-design/icons';
import { Project, AppAction, AppState } from '../../types';

const { Title, Paragraph, Text } = Typography;

interface ProjectsProps {
  projects: Project[];
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

export function Projects({ projects, state, dispatch }: ProjectsProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  return (
    <section id="projects" className="section projects-section">
      <div className="section-inner">
        <div className="section-header">
          <Text type="secondary" className="section-label">Selected Work</Text>
          <Title level={2} className="section-title">Projects I'm proud of</Title>
        </div>

        <div className="projects-scroll-wrapper">
          <div className="projects-scroll" ref={scrollRef}>
            <Row gutter={[24, 24]} wrap={false}>
              {projects.map((project) => (
                <Col key={project.id} flex="320px">
                  <ProjectCard
                    project={project}
                    isHovered={state.hoveredProject === project.id}
                    dispatch={dispatch}
                  />
                </Col>
              ))}
            </Row>
          </div>

          <button
            className="projects-scroll-btn left"
            aria-label="Scroll left"
            onClick={() => {
              const el = scrollRef.current;
              if (!el) return;
              el.scrollBy({ left: -Math.floor(el.clientWidth * 0.8), behavior: 'smooth' });
            }}
          >
            <LeftOutlined />
          </button>
          <button
            className="projects-scroll-btn right"
            aria-label="Scroll right"
            onClick={() => {
              const el = scrollRef.current;
              if (!el) return;
              el.scrollBy({ left: Math.floor(el.clientWidth * 0.8), behavior: 'smooth' });
            }}
          >
            <RightOutlined />
          </button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, isHovered, dispatch }: { project: Project; isHovered: boolean; dispatch: React.Dispatch<AppAction> }) {
  const [imgError, setImgError] = useState(false);

  const cardContent = (
    <Card
      className={`project-card ${isHovered ? 'hovered' : ''}`}
      hoverable
      onMouseEnter={() => dispatch({ type: 'SET_HOVERED_PROJECT', payload: project.id })}
      onMouseLeave={() => dispatch({ type: 'SET_HOVERED_PROJECT', payload: null })}
      cover={
        <div className="project-card-image">
          <div className="project-card-image-inner">
            {project.image && !imgError ? (
              <img
                src={project.image}
                alt={project.alt ?? project.title}
                className="project-card-img"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="project-card-image-placeholder">
                <Text type="secondary">Image not available</Text>
              </div>
            )}
          </div>
        </div>
      }
    >
      <div className="project-card-content">
        <div className="project-card-top">
          <Text type="secondary">{project.year}</Text>
        </div>
        <Title level={4} className="project-title">{project.title}</Title>
        <Paragraph className="project-subtitle">{project.subtitle}</Paragraph>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        {project.link && (
          <Button
            type="text"
            icon={<GithubOutlined />}
            className="project-github-btn"
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.link, '_blank');
            }}
          >
            View on GitHub
          </Button>
        )}
        <div className="project-arrow">
          <ArrowUpOutlined rotate={45} />
        </div>
      </div>
    </Card>
  );

  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card-link">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
