// Import the createStore function from Redux for creating a Redux store
import { createStore } from 'redux';

// Define the initial state of the application
const initialState = {
  tasks: []
};

// Define the reducer function that specifies how state should change in response to actions
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TASK':
      // Add a new task to the tasks array with the provided id, text, and default completion status
      const newTask = { id: action.payload.id, text: action.payload.text, completed: false };
      return {
        ...state,
        tasks: [...state.tasks, newTask]
      };
    case 'DELETE_TASK':
      // Remove a task from the tasks array based on the provided id
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };
    case 'TOGGLE_TASK':
      // Toggle the completion status of a task based on the provided id
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        )
      };
    case 'LOAD_TASKS':
      // Load tasks from local storage if available, otherwise use an empty array
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      return {
        ...state,
        tasks: storedTasks || []
      };
    default:
      return state;
  }
}

// Create the Redux store using the reducer function
const store = createStore(reducer);

// Export the created store
export default store;
