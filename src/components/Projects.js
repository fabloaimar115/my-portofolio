import React from 'react';

const Projects = () => {
  // Load projects dari localStorage
  const projects = JSON.parse(localStorage.getItem('portfolioProjects')) || [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: '',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates',
      image: '',
      technologies: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts',
      image: '',
      technologies: ['JavaScript', 'API', 'CSS3'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'A social platform with user authentication and post sharing',
      image: '',
      technologies: ['React Native', 'Express', 'MySQL'],
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ];

  // Default project images
  const defaultProjectImages = [
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop',
    'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop'
  ];

  const getProjectImage = (project, index) => {
    return project.image || defaultProjectImages[index] || 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=250&fit=crop';
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={getProjectImage(project, index)} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;