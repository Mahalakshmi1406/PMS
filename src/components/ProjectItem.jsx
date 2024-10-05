import React from 'react';

function ProjectItem({ project }) {
  return (
    <li className="p-4 border-b border-gray-300">
      <h3 className="text-xl">{project.name}</h3>
      <p>{project.description}</p>
    </li>
  );
}

export default ProjectItem;
