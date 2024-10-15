import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';
import '../styles/ProjectDetails.scss';

const ProjectDetails = () => {
  const [project, setProject] = useState({});
  const { id } = useParams(); // Use useParams to get the project ID

  useEffect(() => {
    const fetchProject = async () => {
      const res = await axios.get(`http://localhost:3000/projects/${id}`);
      setProject(res.data);
    };

    fetchProject();
  }, [id]);

  return (
    <div className='project-details'>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <h2>Tasks</h2>
      <TaskList tasks={project.tasks || []} />
      <AddTaskForm projectId={id} />
    </div>
  );
};

export default ProjectDetails;
