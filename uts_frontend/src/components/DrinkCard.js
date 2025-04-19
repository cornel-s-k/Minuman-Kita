import { useState } from 'react';
import { useDrinkContext } from '../context/DrinkContext';
import Modal from './Modal';

function DrinkCard({ drink }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { deleteDrink } = useDrinkContext();

  const handleDelete = () => {
    deleteDrink(drink.id);
    setIsModalOpen(false);
  };

  return (
    <div className="drink-card transition-transform hover:scale-105">
      <h3>{drink.name}</h3>
      <p>Rp {drink.price}</p>
      <p>{drink.type}</p>
      <button onClick={() => setIsModalOpen(true)}>Hapus</button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        title="Hapus Minuman"
        message={`Yakin ingin hapus \"${drink.name}\"?`}
      />
    </div>
  );
}

export default DrinkCard;
