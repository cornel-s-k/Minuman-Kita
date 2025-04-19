// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DrinkProvider } from './context/DrinkContext';
import AddDrinkPage from './components/AddDrinkPage';
import HomePage from './components/HomePage'; // Pisah biar rapi
import './App.css';

function App() {
  return (
    <DrinkProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddDrinkPage />} />
      </Routes>
    </DrinkProvider>
  );
}

export default App;
