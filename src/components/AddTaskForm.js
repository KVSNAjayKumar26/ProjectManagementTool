import axios from 'axios';
import React, { useState } from 'react'
import '../styles/AddTaskForm.scss';
const AddTaskForm = ({ projectId }) => {
  const [taskName, setTaskName] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { name: taskName, deadline };

    axios.post(`http://localhost:3000/projects/${projectId}/tasks`, newTask).then((res) => {
      setTaskName('');
      setDeadline('');
    });
  };
  return (
    <form className='add-task-form' onSubmit={handleSubmit}>
      <input
      type='text'
      placeholder='Task Name'
      value={taskName}
      onChange={(e) => setTaskName(e.target.value)}
      required
      />
      <input 
      type='date'
      value={deadline}
      onChange={(e) => setDeadline(e.target.value)}
      required
      />
      <button type='submit'>Add Task</button>
    </form>
  );
};

export default AddTaskForm;