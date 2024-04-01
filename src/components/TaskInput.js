// Import React and the useState hook from React
import React, { useState } from 'react';

// Import the useDispatch hook from react-redux to dispatch actions
import { useDispatch } from 'react-redux';

// Import the addTask action creator function from the actions file
import { addTask } from '../actions';

// TaskInput component responsible for rendering the task input field and handling task addition
const TaskInput = () => {
  // State hook to manage the input text
  const [text, setText] = useState('');

  // useDispatch hook to get the dispatch function
  const dispatch = useDispatch();

  // Function to handle the addition of a new task
  const handleAddTask = () => {
    // Check if the input text is not empty
    if (text.trim() !== '') {
      // Dispatch the addTask action with a random id and the trimmed input text
      dispatch(addTask(Math.random(), text.trim()));
      // Clear the input field by resetting the text state
      setText('');
    }
  };

  // Render the task input field and the add button
  return (
    <div className="task-input-container">
      <input
        id="taskInput"
        className="task-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What do you need to do?"
      />
      <button className="add-task-btn" onClick={handleAddTask}>Add</button>
    </div>
  );
};

// Export the TaskInput component
export default TaskInput;
