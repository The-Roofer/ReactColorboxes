import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from './App'
import reportWebVitals from './reportWebVitals';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container boxNumber = {63}/>

  </React.StrictMode>
);
reportWebVitals();