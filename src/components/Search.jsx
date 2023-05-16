import React, { useState } from 'react';

function Search ({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSearch(searchTerm);
    };
  
    return (
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          id='text-input'
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Enter your search here..."
        />
        <button type="submit">Search</button>
      </form>
    );
  };
  
  export default Search;
  