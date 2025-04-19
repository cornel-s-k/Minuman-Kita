import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const DrinkContext = createContext();
const baseURL = 'http://localhost:3001'; // Gunakan ini untuk semua request

export const DrinkProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [filteredDrinks, setFilteredDrinks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isGrid, setIsGrid] = useState(true);

  // Ambil semua minuman dari server
  const fetchDrinks = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${baseURL}/api/drinks`);
      setDrinks(res.data);
      setFilteredDrinks(res.data);
      setLoading(false);
    } catch (err) {
      setError('Gagal mengambil data minuman');
      setLoading(false);
    }
  };

  // Tambahkan minuman
  const addDrink = async (drink) => {
    try {
      const res = await axios.post(`${baseURL}/api/drinks`, drink);
      const newDrink = res.data;
      const updated = [...drinks, newDrink];
      setDrinks(updated);

      const matchesSearch = newDrink.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        filterCategory.toLowerCase() === 'all' ||
        newDrink.type.toLowerCase() === filterCategory.toLowerCase();

      if (matchesSearch && matchesCategory) {
        setFilteredDrinks([...filteredDrinks, newDrink]);
      }
    } catch (err) {
      setError('Gagal menambahkan minuman');
    }
  };

  // Hapus minuman
  const deleteDrink = async (id) => {
    try {
      await axios.delete(`${baseURL}/api/drinks/${id}`);
      const updated = drinks.filter((d) => d.id !== id);
      setDrinks(updated);
    } catch (err) {
      setError('Gagal menghapus minuman');
    }
  };

  // Ambil data saat komponen pertama kali di-load
  useEffect(() => {
    fetchDrinks();
  }, []);

  // Filter data minuman berdasarkan search dan kategori
  useEffect(() => {
    let filtered = [...drinks];

    if (searchTerm) {
      filtered = filtered.filter((d) =>
        d.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterCategory.toLowerCase() !== 'all') {
      filtered = filtered.filter(
        (d) => d.type.toLowerCase() === filterCategory.toLowerCase()
      );
    }

    setFilteredDrinks(filtered);
  }, [searchTerm, filterCategory, drinks]);

  return (
    <DrinkContext.Provider
      value={{
        drinks: filteredDrinks,
        addDrink,
        deleteDrink,
        fetchDrinks,
        setSearchTerm,
        setFilterCategory,
        isGrid,
        setIsGrid,
        loading,
        error,
      }}
    >
      {children}
    </DrinkContext.Provider>
  );
};

export const useDrinkContext = () => useContext(DrinkContext);
