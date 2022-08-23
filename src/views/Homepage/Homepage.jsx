import React, { useContext, useEffect } from 'react';

import * as S from './style';

import GlobalStyle from '../../styles/global.styles';
import CurrentWeatherContainer from '../../containers/CurrentWeatherContainer/CurrentWeatherContainer';
import ForecastContainer from '../../containers/ForecastContainer/ForecastContainer';
import SearchbarContainer from '../../containers/SearchbarContainer/SearchbarContainer';

import { WeatherContext } from '../../contexts/weatherContext';

const Homepage = () => {
  const weatherContextValue = useContext(WeatherContext);
  if (weatherContextValue.result.city === '') {
    // TODO : Refactor if state
    return (
      <S.Container>
        <S.HomepageTitle>Weather App</S.HomepageTitle>
        <S.Wrapper>
          <GlobalStyle />
          <SearchbarContainer />
        </S.Wrapper>
      </S.Container>
    );
  } else {
    return (
      <S.Container>
        <S.HomepageTitle>Weather App</S.HomepageTitle>
        <S.Wrapper>
          <GlobalStyle />
          <SearchbarContainer />
          <CurrentWeatherContainer />
          <ForecastContainer />
        </S.Wrapper>
      </S.Container>
    );
  }
};

export default Homepage;
