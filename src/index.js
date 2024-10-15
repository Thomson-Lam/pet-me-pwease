import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Component from './components/component.js';
import reportWebVitals from './reportWebVitals';
import FeedButton from './components/feedbutton.js';
// require('dotenv').config();

// const API_key = process.env.REACT_APP_API_KEY;
const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <Component />
            <FeedButton />
        </React.StrictMode>
    )
} else {
    console.log("Error");
}




reportWebVitals(); // calls reportWebVitals() for perf metrics