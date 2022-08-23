import React, { useEffect, useState, useContext } from 'react';
import urls from '../../config/urls';
import { openWeatherMapAPI } from '../../services/axiosService';
import { WeatherContext } from '../../contexts/weatherContext';
import Loader from '../../components/WeatherLoading';

import CardsList from '../../components/CardsList';

const ForecastContainer = () => {
  const weatherContextValue = useContext(WeatherContext);
  const [forecast, setForecast] = useState([]);

  const getWeatherForecast = async () => {
    const url = urls.weather.forecast(
      `lat=${weatherContextValue.result.lat}&lon=${weatherContextValue.result.lon}`
    );
    console.log('~ weatherContextValue.result', weatherContextValue.result);
    try {
      const { data } = await openWeatherMapAPI.get(url);
      console.log('forecast data -> ', data);
      setForecast(data.hourly);
      weatherContextValue.setResult({
        ...weatherContextValue.result,
      });
    } catch (error) {
      console.error({ error: error.message });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getWeatherForecast();
    }, 700);
  }, [weatherContextValue.result.lat, weatherContextValue.result.lon]);

  if (
    weatherContextValue.result.lat !== 0 &&
    weatherContextValue.result.lon !== 0
  ) {
    return (
      <div>
        <CardsList forecast={forecast} listTitle='Forecast' />
      </div>
    );
  } else {
    return (
      <Loader
        text='LOOKING OUTSIDE FOR YOU... ONE SEC'
        cloudColor='lightyellow'
        sunColor='yellow'
      />
    );
  }
};

export default ForecastContainer;
