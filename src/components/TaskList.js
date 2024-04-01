// Import React, useEffect hook from React
import React, { useEffect } from 'react';

// Import useSelector, useDispatch hooks from react-redux
import { useSelector, useDispatch } from 'react-redux';

// Import deleteTask, toggleTask, loadTasks action creators from actions
import { deleteTask, toggleTask, loadTasks } from '../actions';

// TaskList component to render the list of tasks
const TaskList = () => {
  // Get the tasks array from the Redux store
  const tasks = useSelector(state => state.tasks);

  // Get the dispatch function from useDispatch hook
  const dispatch = useDispatch();

  // useEffect hook to load tasks from local storage when the component mounts
  useEffect(() => {
    dispatch(loadTasks());  // Dispatch the loadTasks action to load tasks from local storage
  }, [dispatch]);           // Dependency array with dispatch to ensure the effect runs only once

  // Function to handle task deletion
  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));  // Dispatch the deleteTask action with the task id
  };

  // Function to handle task completion status toggling
  const handleToggleTask = (id) => {
    dispatch(toggleTask(id));  // Dispatch the toggleTask action with the task id
  };

  // useEffect hook to save tasks to local storage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));  // Store the tasks array in local storage
  }, [tasks]);  // Dependency array with tasks to ensure the effect runs whenever tasks change

  // Render the list of tasks
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => handleToggleTask(task.id)}
          />
          <span>{task.text}</span>
          <button onClick={() => handleDeleteTask(task.id)}>
            <img src='https://img.icons8.com/ios/250/000000/waste.png' style={{ height: '20px', width: '20px' }} alt="delete" />
          </button>
        </li>
      ))}
    </ul>
  );
};

// Export the TaskList component
export default TaskList;
