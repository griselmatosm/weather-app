import React from 'react';
import { connect } from 'react-redux';
import Chart from './Chart';
import '../styles/style.css';


const WeatherList = (props) => {
  const cities = props.weather.map((item) => {
      const name = item.city.name;
      const temps = item.list.map(weather => (weather.main.temp)-273.15)
      const pressures = item.list.map(weather => weather.main.pressure)
      const humidities = item.list.map(weather => weather.main.humidity)
            
    return (
      <tr key={item.city.id}>
        <td>{name}</td>
        <td> <Chart data={temps} color="orange" unit="ºC" /> </td>
        <td> <Chart data={pressures} color="green" unit="hPa" /> </td>
        <td> <Chart data={humidities} color="black" unit="%" /> </td>
      </tr>
    );
  });

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature (ºC)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
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
