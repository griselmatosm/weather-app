import { FETCH_WEATHER } from './types';
import axios from 'axios';

const API_KEY = '2523edfecefa481059214f42bf0cf075';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const fetchWeather = (city) => async (dispatch) => {
  const url = `${ROOT_URL}&q=${city},es`;
  const response = await axios.get(url);

  dispatch({ type: FETCH_WEATHER, payload: response.data });
};
