import React from 'react';
import SearchBar from './SearchBar';
import WeatherList from './WeatherList';

function App() {
  return (
    <div style={{padding: '50px'}}>
      <SearchBar />
      <WeatherList />
    </div>
  );
}

export default App;
