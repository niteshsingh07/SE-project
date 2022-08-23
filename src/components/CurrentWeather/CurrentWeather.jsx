import React from 'react';
import * as S from './style';

import Title from '../Title';
import Subtitle from '../Subtitle';
import Cloud from '../../assets/icons/Cloud';

const CurrentWeather = ({ bodyTitleText, bodySubtitleText }) => {
  return (
    <S.CurrentWeatherContainer>
      <S.CurrentWeatherBody>
        <Cloud />
        <S.TitleBox>
          <Title text={bodyTitleText} />
          <Subtitle text={bodySubtitleText} />
        </S.TitleBox>
      </S.CurrentWeatherBody>
    </S.CurrentWeatherContainer>
  );
};

export default CurrentWeather;
