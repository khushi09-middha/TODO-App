// Action creator function to add a new task
export const addTask = (id, text) => ({
    type: 'ADD_TASK',        // Action type for adding a task
    payload: { id, text }    // Data payload containing the task id and text
  });
  
  // Action creator function to delete a task
  export const deleteTask = (id) => ({
    type: 'DELETE_TASK',     // Action type for deleting a task
    payload: id              // Data payload containing the task id
  });
  
  // Action creator function to toggle the completion status of a task
  export const toggleTask = (id) => ({
    type: 'TOGGLE_TASK',     // Action type for toggling a task
    payload: id              // Data payload containing the task id
  });
  
  // Action creator function to load tasks from storage
  export const loadTasks = () => ({
    type: 'LOAD_TASKS'       // Action type for loading tasks
  });
  