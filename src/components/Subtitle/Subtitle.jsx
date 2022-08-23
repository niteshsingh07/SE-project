import React from 'react';
import * as S from './style';

const Subtitle = ({ size, text, color, align }) => {
  return (
    <S.Subtitle align={align} color={color} size={size}>
      {text}
    </S.Subtitle>
  );
};

export default Subtitle;
