import React from 'react';
import { useParams } from 'react-router-dom';
import data from './ProjectsInfo'; // Adjust the path as necessary

const ProjectDetail = () => {
  const { id } = useParams();
  const projectData = data.projectData || []; // Adjust if the structure is different

  // Find the project by id
  const project = projectData.find(p => p.id === parseInt(id, 10));

  if (!project) {
    return <p>Project not found.</p>;
  }

  // Get the first additional entry with fallback
  const additional = (project.additionals && project.additionals.length > 0)
    ? project.additionals[0]
    : { Project: 'N/A', overview: 'No overview available.', working: 'No working details available.', tools: 'No tools listed.' };

  // Fallback image URL if project.img is missing
  const fallbackImage = 'path/to/fallback-image.jpg'; // Provide a path to a fallback image
  const imageUrl = project.img || fallbackImage;

  return (
    <div className="project-detail">
      <div className="project-info">
        <h2>{project.name}</h2>
        <h3>{project.type}</h3>
        <p className='boxskill'>{additional.Project}</p>
        <img src={imageUrl} alt={project.name} className="project-image" />
        <p>{additional.overview}</p>
        <p>{additional.working}</p>
        <p>{additional.tools}</p>
      </div>
    </div>
  );
};

export default ProjectDetail;

