import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { DisasterProvider } from './context/DisasterContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DisasterProvider>
        <App />
      </DisasterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
