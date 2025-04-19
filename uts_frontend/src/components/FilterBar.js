import { useDrinkContext } from '../context/DrinkContext';

const FilterBar = () => {
  const { setSearchTerm, setFilterCategory } = useDrinkContext();

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search drinks..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select onChange={(e) => setFilterCategory(e.target.value)}>
  <option value="all">Semua</option>
  <option value="Jus">Jus</option>
  <option value="Teh">Teh</option>
  <option value="Smoothie">Smoothie</option>
  <option value="Susu">Susu</option>
  <option value="Infused Water">Infused Water</option>
</select>
    </div>
  );
};

export default FilterBar;
