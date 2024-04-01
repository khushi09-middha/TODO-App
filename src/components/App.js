import React from 'react';
import './styles.css'; 
import TaskInput from './TaskInput';
import TaskList from './TaskList';

// The main App component
const App = () => {
  return (
    <div>
      {/* Header section */}
      <div className='todo-head'>
        {/* Todo list icon */}
        <img src="https://img.icons8.com/ios/250/000000/todo-list.png" style={{ height: '48px', width: '50px' }} />
        {/* Title */}
        <h1>TODO</h1> 
      </div>
      {/* Task input component */}
      <TaskInput />
      {/* Task list component */}
      <TaskList />
    </div>
  );
};

export default App;
