import React, { useState } from 'react';
import TransactionTable from './TransactionTable';

const SearchBar = ({ transactions }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState(transactions);

  const handleInputChange = (event) => {
    event.preventDefault();
    const filteredItems = transactions.filter((element) =>
      element.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilter(filteredItems);
  };

  const show = searchTerm === '' ? transactions : filter;

  return (
    <div>
      <label>
        Search Description:
        <form onSubmit={handleInputChange}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>Search</button>
        </form>
      </label>

      <TransactionTable show={show} />
    </div>
  );
};

export default SearchBar;
