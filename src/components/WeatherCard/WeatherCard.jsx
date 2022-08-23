import React from 'react';
import * as S from './style';

import Backdrop from '../Backdrop';
import Subtitle from '../Subtitle';
import Icon from '../Icon';

const WeatherCard = ({ color, opacity, text1, text2, src, text3 }) => {
  return (
    <S.Card>
      <Backdrop color={color} opacity={opacity}>
        <Subtitle text={text1} />
        <Subtitle text={text2} />
        <Icon src={src} />
        <Subtitle text={text3} />
      </Backdrop>
    </S.Card>
  );
};

export default WeatherCard;
