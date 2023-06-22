import React from 'react';

const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h3>{task}</h3>
      <button onClick={onDelete} className="delete-btn">Delete</button>
    </div>
  );
};

export default Task;
