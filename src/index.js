import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Benefit from './components/benefit/Benefit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Benefit/>
  </React.StrictMode>
);

