import React from 'react';
import * as S from './style';

const Loader = ({ color }) => {
  return <S.Spinner color={color} />;
};

export default Loader;
