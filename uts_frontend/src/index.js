import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';

// ⬇️ Tambahkan ini:
import { DrinkProvider } from './context/DrinkContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <DrinkProvider>
      <App />
    </DrinkProvider>
  </BrowserRouter>
);
