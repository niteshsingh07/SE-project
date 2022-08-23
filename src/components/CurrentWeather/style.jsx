import styled from 'styled-components';

export const CurrentWeatherContainer = styled.div`
  max-width: inherit;
  display: flex;
  margin-top: rem;
  flex-direction: column;
`;

export const CurrentWeatherBody = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  svg {
    width: 230px;
    height: 230px;
  }

  path {
    stroke: #9ea1a4;
    stroke-width: 0.25;
    fill: white;
  }
`;

export const TitleBox = styled.div`
  margin-top: 2rem;
`;
