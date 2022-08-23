import styled from 'styled-components';

export const Subtitle = styled.h4`
  font-size: ${({ size }) => size || '24px'};
  color: ${({ color }) => color};
  display: flex;
  justify-content: ${({ align }) => align || 'center'};
  color: rgb(255, 255, 255);
  font-weight: 400;
`;
