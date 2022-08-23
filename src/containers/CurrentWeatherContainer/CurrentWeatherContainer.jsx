import React, { useEffect, useState, useContext } from 'react';
import urls from '../../config/urls';
import errors from '../../config/errors';
import { openWeatherMapAPI } from '../../services/axiosService';

import Loader from '../../components/WeatherLoading';
import CurrentWeather from '../../components/CurrentWeather';
import WeatherDetails from '../../components/WeatherDetails';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';
import Error from '../../components/Error';
import * as S from '../../views/Homepage/style';

import { WeatherContext } from '../../contexts/weatherContext';

const CurrentWeatherContainer = () => {
  const weatherContextValue = useContext(WeatherContext);

  const [currentDetails, setCurrentDetails] = useState();

  const getCurrentWeather = async () => {
    const url = urls.weather.current(weatherContextValue.result.city);
    try {
      const { data } = await openWeatherMapAPI.get(url);
      console.log('data -> ', data);
      setCurrentDetails(data);
      weatherContextValue.setResult({
        ...weatherContextValue.result,
        lat: data.coord.lat,
        lon: data.coord.lon,
      });
    } catch (error) {
      weatherContextValue.setResult({
        ...weatherContextValue.result,
        errorCode: error.response.status,
      });
      console.log('error', error.response);
      console.error({ error: error.message });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getCurrentWeather();
      console.log('checker ', weatherContextValue.result);
    }, 2000);
  }, [weatherContextValue.result.city]);

  if (!currentDetails) {
    return weatherContextValue.result.errorCode ? (
      errors.map((error) => {
        return error.code === weatherContextValue.result.errorCode ? (
          <Error key={error.code} error={error.message} />
        ) : (
          ''
        );
      })
    ) : (
      <Loader
        text='LOOKING OUTSIDE FOR YOU... ONE SEC'
        cloudColor='lightyellow'
        sunColor='yellow'
      />
    );
  } else {
    const sunset = new Date(
      currentDetails.sys.sunset * 1000
    ).toLocaleTimeString();

    const sunrise = new Date(currentDetails.sys.sunrise * 1000)
      .toLocaleTimeString('he-IL')
      .slice(0, 4);
    return (
      <S.Main>
        <S.CurrentWeatherHeader>
          <Title
            text={currentDetails.name + ', ' + currentDetails.sys.country}
          />

          <Subtitle text={new Date().toString().slice(0, 10)} />
        </S.CurrentWeatherHeader>

        <S.MainCurrentWrapper>
          <CurrentWeather
            bodyTitleText={currentDetails.main.temp + '°'}
            bodySubtitleText={currentDetails.weather[0].description}
          />
        </S.MainCurrentWrapper>

        <S.MainDetailsWrapper>
          <WeatherDetails
            hight={currentDetails.main.temp_max + '°'}
            low={currentDetails.main.temp_min + '°'}
            wind={currentDetails.wind.speed + 'mph'}
            rain={(currentDetails.rain && currentDetails.rain + '%') || '0%'}
            sunrise={sunrise}
            sunset={sunset}
          />
        </S.MainDetailsWrapper>
      </S.Main>
    );
  }
};

export default CurrentWeatherContainer;
