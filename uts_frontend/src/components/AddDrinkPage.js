import React, { useState } from 'react';
import { useDrinkContext } from '../context/DrinkContext';


function AddDrinkPage() {
  const { addDrink } = useDrinkContext();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('mocktail');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (name.length < 3) newErrors.name = 'Nama minuman minimal 3 karakter';
    if (!price || isNaN(price) || Number(price) <= 0) newErrors.price = 'Harga harus angka lebih dari 0';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const newDrink = {
        name,
        price: parseInt(price),
        type: category
      };
      await addDrink(newDrink);
      alert('Minuman berhasil ditambahkan!');
      setName('');
      setPrice('');
      setCategory('mocktail');
    }
  };

  return (
    <div className="form-container">
      <h2>Tambah Minuman Sehat</h2>
      <form onSubmit={handleSubmit}>
        <label>Nama Minuman</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label>Harga (Rp)</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        {errors.price && <p className="error">{errors.price}</p>}

        <label>Kategori</label>
        <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
    <option value="all">Semua</option>
          <option value="Jus">Juice</option>
          <option value="Teh">Teh</option>
          <option value="Coffe">Coffe</option>
          <option value="Susu">Susu</option>
          <option value="Infused Water">Infused Water</option>
</select>

        <button type="submit">Tambah</button>
      </form>
    </div>
  );
}

export default AddDrinkPage;
