import React from 'react';
import * as S from './style';

import Backdrop from '../Backdrop';
import Subtitle from '../Subtitle';

const WeatherDetails = ({
  hight,
  low,
  wind,
  rain,
  sunrise,
  sunset,
  opacity,
  color,
}) => {
  return (
    <Backdrop opacity={opacity} color={color}>
      <S.UL>
        <S.LI>
          <Subtitle text={hight} />
          <Subtitle text='Hight' />
        </S.LI>
        <S.LI>
          <Subtitle text={low} />
          <Subtitle text='Low' />
        </S.LI>
        <S.LI>
          <Subtitle text={wind} />
          <Subtitle text='Wind' />
        </S.LI>
        <S.LI>
          <Subtitle text={rain} />
          <Subtitle text='Rain' />
        </S.LI>
        <S.LI>
          <Subtitle text={sunrise} />
          <Subtitle text='Sunrise' />
        </S.LI>
        <S.LI>
          <Subtitle text={sunset} />
          <Subtitle text='Sunset' />
        </S.LI>
      </S.UL>
    </Backdrop>
  );
};

export default WeatherDetails;
