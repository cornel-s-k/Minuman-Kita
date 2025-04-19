import React from 'react';
import { useDrinkContext } from '../context/DrinkContext';
import DrinkCard from './DrinkCard';

const DrinkList = () => {
  const { drinks, loading, error } = useDrinkContext();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="drink-list-wrapper">
      {drinks.length === 0 ? (
        <p>❌ Tidak ada minuman ditemukan</p>
      ) : (
        drinks.map((drink) => <DrinkCard key={drink.id} drink={drink} />)
      )}
    </div>
  );
};

export default DrinkList;