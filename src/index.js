import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Component from './component';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <Component />
        </React.StrictMode>
    )
} else {
    console.log("Error");
}




reportWebVitals(); // calls reportWebVitals() for perf metrics