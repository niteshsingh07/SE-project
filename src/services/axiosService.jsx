import axios from 'axios';
import urls from '../config/urls';

export const openWeatherMapAPI = axios.create({
  baseURL: urls.weather.base,
});
