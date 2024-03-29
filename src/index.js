import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Benefit from './components/benefit/Benefit';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Benefit/>
    <Testimonials/>
    <Footer/>
  </React.StrictMode>
);

