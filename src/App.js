import React, { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import backgroundImage from './clive.jpg';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <h1>Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <div className="task-list">
        {tasks.map((task, index) => (
          <Task key={index} task={task} onDelete={() => deleteTask(index)} />
        ))}
      </div>
    </div>
  );
};

export default App;
