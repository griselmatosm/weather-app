import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';

const SearchBar = (props) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    props.fetchWeather(term);
    setTerm('');
  };

  return (
    <form className="input-group mb-3" onSubmit={onFormSubmit}>
      <input placeholder="Get a five-day forecast in your favorite cities" className="form-control" value={term} onChange={(event) => setTerm(event.target.value)} />
      <span className="input-group-btn">
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </span>
    </form>
  );
};



export default connect(null, { fetchWeather })(SearchBar);
