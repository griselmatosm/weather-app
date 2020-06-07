import React from 'react';
import { connect } from 'react-redux';

const WeatherList = (props) => {
  const cities = props.weather.map((item) => {
      const name = item.city.name;
      const temps = item.list.map(weather => weather.main.temp)
      console.log(temps);
      
    return (
      <tr key={item.city.id}>
        <td>{name}</td>
      </tr>
    );
  });

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
      </thead>
      <tbody> {cities} </tbody>
    </table>
  );
};

const mapStateToProps = ({ weather }) => {
  return { weather };
};

export default connect(mapStateToProps)(WeatherList);
