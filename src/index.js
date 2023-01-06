import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CounterContextProvaider from './components/contexts/CounterContextProvaider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CounterContextProvaider>
    <App />
  </CounterContextProvaider>
);

