import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css'; // Import global styles
import App from './App'; // Import the main App component

// Render the App component into the root element
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
