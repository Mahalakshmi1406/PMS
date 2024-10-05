import React from 'react';
import ProjectList from '../components/ProjectList';

function Dashboard() {
  return (
    <div className="fullscreen-bg">
      <div className="page-content">
        <h1 className="text-3xl font-bold mb-6">Project Management System</h1>
        <ProjectList />
      </div>
    </div>
  );
}

export default Dashboard;

