import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProjectList from './ProjectList';
import '../styles/Dashboard.scss';
const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/projects').then((res) => setProjects(res.data))
  }, []);
  return (
    <div className='dashboard'>
      <h1>Project Management Dashboard</h1>
      <ProjectList projects={projects} />
    </div>
  );
};

export default Dashboard;