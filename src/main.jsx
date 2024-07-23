// main.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'; // Import the Redux store
import App from './App'; // Import the root App component

// Render the React application
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') // Ensure this ID matches the element in your HTML
);
