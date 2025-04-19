// src/components/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDrinkContext } from '../context/DrinkContext';
import DrinkList from './DrinkList';

const HomePage = () => {
  const {
    setSearchTerm,
    setFilterCategory,
    isGrid,
    setIsGrid,
  } = useDrinkContext();

  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/add');
  };

  return (
    <div className="App">
      <div className="top-bar">
        <h1>Katalog Minuman Sehat</h1>
        <button onClick={handleAddClick}>Tambah Minuman</button>
      </div>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Cari minuman..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="all">Semua</option>
          <option value="Jus">Juice</option>
          <option value="Teh">Teh</option>
          <option value="Coffe">Coffe</option>
          <option value="Susu">Susu</option>
          <option value="Infused Water">Infused Water</option>
        </select>
        <button onClick={() => setIsGrid(!isGrid)}>
          {isGrid ? '🔃 List View' : '🔃 Grid View'}
        </button>
      </div>

      <div className={`drink-list ${isGrid ? 'grid-view' : 'list-view'}`}>
        <DrinkList />
      </div>
    </div>
  );
};

export default HomePage;
