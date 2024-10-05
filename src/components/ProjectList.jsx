import React from 'react';
import ProjectItem from './ProjectItem.jsx';
import { useProjectStore } from '../store/projectStore.jsx';

function ProjectList() {
  const projects = useProjectStore((state) => state.projects);

  return (
    <div>
      <h2 className="text-2xl mb-4">Projects</h2>
      <ul>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;