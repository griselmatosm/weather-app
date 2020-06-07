import React, { useState } from 'react';

const SearchBar = () => {
    const [term, setTerm] = useState('');
  return (
    <form className="input-group mb-3" onSubmit={(event) => event.preventDefault()}>
      <input 
      placeholder="Get a five-day forecast in your favorite cities" 
      className="form-control"
      value={term}
      onChange={(event) => setTerm(event.target.value)}
      />
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </span>
    </form>
  );
};

export default SearchBar;
