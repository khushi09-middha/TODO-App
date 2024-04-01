import React from 'react';               // Import React library for JSX syntax
import ReactDOM from 'react-dom';         // Import ReactDOM for rendering React components in the DOM
import { Provider } from 'react-redux';   // Import Provider component from react-redux for Redux store integration
import store from './store';              // Import the Redux store
import App from './components/App';       // Import the main App component

// Render the application to the root element in the HTML file
ReactDOM.render(
  <Provider store={store}>               {/* Provide the Redux store to the entire application */}
    <App />                              {/* Render the main App component */}
  </Provider>,
  document.getElementById('root')        // Specify the root element in the HTML file where the app will be rendered
);
