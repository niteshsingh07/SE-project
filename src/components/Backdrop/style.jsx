import styled from 'styled-components';
import colorConvert from 'color-convert';

const bgColorHelper = (color) => {
  return color
    ? color.slice(0, 1) === '#'
      ? colorConvert.hex.rgb(color).toString()
      : colorConvert.keyword.rgb(color).toString()
    : '255, 255, 255';
};

export const Backdrop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  background: rgba(
    ${({ color }) => bgColorHelper(color)},
    ${({ opacity }) => opacity || '0.2'}
  );
  padding: 10px 0;
  margin: 20px 0;
  border-radius: 10px;
`;
