import React from 'react';
import * as S from './style';

const Backdrop = ({ color, opacity, children, width, height }) => {
  return (
    <S.Backdrop opacity={opacity} width={width} height={height} color={color}>
      {children}
    </S.Backdrop>
  );
};

export default Backdrop;
