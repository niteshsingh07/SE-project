import React from 'react';
import * as S from './style';

import WeatherCard from '../WeatherCard';
import Subtitle from '../Subtitle';

const cardListRender = (forecast) => {
  return forecast.map((weather) => {
    const forecastDate = new Date(weather.dt * 1000)
      .toLocaleDateString()
      .slice(0, 4);

    console.log('forecastDate', forecastDate);

    const forecastHour = new Date(weather.dt * 1000)
      .toLocaleTimeString()
      .slice(0, 5);
    return (
      <WeatherCard
        text1={forecastDate}
        text2={forecastHour}
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        text3={weather.temp + '°'}
      />
    );
  });
};

const CardList = ({ forecast, listTitle }) => {
  console.log('forecast..', forecast);
  return (
    <S.CardsList>
      <S.ListTitle>
        <Subtitle text={listTitle} />
      </S.ListTitle>
      <S.List>{cardListRender(forecast)}</S.List>
    </S.CardsList>
  );
};

export default CardList;
