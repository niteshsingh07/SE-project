import styled from 'styled-components';

export const Container = styled.div``;
export const Wrapper = styled.div`
  margin: 0 auto;
  height: calc(100vh - 4rem);
  max-width: 90%;
  position: relative;
`;

export const HomepageTitle = styled.h1`
  height: 64px;
  padding: 20px;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 400;
  color: #ffffff;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
`;
export const HeaderWrapper = styled.header`
  width: 43rem;
`;

export const Main = styled.div`
  display: flex;
  padding-bottom: 3rem;
  align-items: flex-end;
  justify-content: space-between;

  @media only screen and (max-width: 890px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const CurrentWeatherHeader = styled.div`
  align-self: flex-start;

  @media only screen and (max-width: 890px) {
    margin: auto;
  }
`;

export const MainCurrentWrapper = styled.div`
  flex-basis: 20%;
`;

export const MainDetailsWrapper = styled.div`
  flex-basis: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
