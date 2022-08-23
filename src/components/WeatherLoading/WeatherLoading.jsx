import React from 'react';
import Cloud from '../../assets/icons/Cloud';
import Sun from '../../assets/icons/Sun';
import * as S from './styled';

const dropsPrinter = (runner) => {
  const durations = [
    '-130ms',
    '-240ms',
    '-390ms',
    '-525ms',
    '-640ms',
    '-790ms',
    '-900ms',
    '-1050ms',
    '-1130ms',
    '-1300ms',
  ];
  const drops = [];
  for (let index = 0; index < runner; index++) {
    drops.push(
      <S.Drop
        orderNumber={index + 1}
        key={index + 1}
        duration={durations[index]}
      ></S.Drop>
    );
  }
  return drops;
};

const WeatherLoading = ({ text, sunColor, cloudColor }) => {
  return (
    <S.WeatherLoading
      style={{ opacity: 1 }}
      sunColor={sunColor}
      cloudColor={cloudColor}
    >
      <Cloud />
      <Sun />
      <S.Rain>{dropsPrinter(10)}</S.Rain>

      <S.Text>{text}</S.Text>
    </S.WeatherLoading>
  );
};

export default WeatherLoading;
