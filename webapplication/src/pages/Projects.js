import React from "react";
import { Link } from 'react-router-dom';
import data from './ProjectsInfo'; // Adjust the path as necessary

const Projects = () => {
  const projectData = data.projectData || []; // Ensure projectData is defined and is an array

  if (!Array.isArray(projectData)) {
    return <p>No projects available.</p>;
  }

  return (
    <div className='project'>
      <h2 className="pro">Projects</h2>
      {projectData.length === 0 ? (
        <p>No projects available.</p>
      ) : (
        projectData.map(project => (
          <div key={project.id} className='project-item'>
            <Link to={`/projects/${project.id}`} className='project-btn'>
              <div className='image-container'>
                <div className='project-type'>{project.type}</div>
                <img src={project.img || 'default-image.jpg'} alt={project.name} className='image-rst' />
              </div>
              <div className='project-details'>
                <h3 className='project-title'>{project.name}</h3>
                <p className='description'>{project.subtitle || 'No subtitle provided'}</p>
              </div>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Projects;





