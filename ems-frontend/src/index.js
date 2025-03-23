import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/**
 * Bootstrap is a CSS framework for styling the web pages. we can create responsive web pages.
 * Adding Bootstrap in React using NPM:
 * 
 * cd ems
 * npm install bootstrap --save (here --save will add bootstrap dependency in the package.json).
 * now , our bootstrap dependencies is added to package.json.
 * node modules --> bootstrap --> dist --> css --> bootstrap.min.css
 * we have to import this file in our react main.js ie index.js here to use our bootstrap.
 * 
 * 
 * List Employee Component display dummy data
 * 
 * 
 * Get all employee by REST API Calls
 * S1: Install axios library - npm install axios --save
 * S2: Create EmployeeService.js file
 * S3: Write REST Client code to make a REST API call using axios API
 * S4: Change ListEmployeeComponent to display response of the REST API
 * S5: Test the above changes.
 * 
 * Header & Footer Component
 * 
 * Routing:
 * S1: Install react-router-dom library using NPM. npm install react-router-dom --save
 * S2: Configure Routing in App Component
 * S3: Configure Route for ListEmployeeComponent
 * S4: Test Route for ListEmployeeComponent
 */
