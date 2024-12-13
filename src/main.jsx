import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
