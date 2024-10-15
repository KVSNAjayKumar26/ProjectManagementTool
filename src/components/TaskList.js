import React from 'react'
import '../styles/TaskList.scss';
const TaskList = ({ tasks }) => {
  return (
    <div className='task-list'>
      {tasks.map((task) => (
        <div key={task.id} className='task-card'>
          <h3>{task.name}</h3>
          <p>{task.deadline}</p>
          </div>
      ))}
    </div>
  );
};

export default TaskList;