import styled from 'styled-components';

export const Drop = styled.span(({ orderNumber, duration }) => {
  return `
  opacity: 1;
  background: #9ea1a4;
  display: block;
  float: left;
  width: 3px;
  height: 10px;
  margin-left: 4px;
  border-radius: 0px 0px 6px 6px;

  animation-name: drop;
  animation-duration: 350ms;
  animation-iteration-count: infinite;

  &:nth-child(${orderNumber}){
    animation-delay:${duration}
  }

  @keyframes drop {
    50% {
      height: 45px;
      opacity: 0;
    }

    51% {
      opacity: 0;
    }

    100% {
      height: 1px;
      opacity: 0;
    }
  }
`;
});

export const Rain = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  margin-top: -32px;
  margin-left: 70px;

  /* ${({ children }) => {
    let str = '';

    children.map((child) => {
      str += `
      ${Drop}:nth-child(${parseInt(child.key)}) {
          animation-delay: ${child.props.duration};
         }
      `;
      return str;
    });
    return str;
  }} */
`;

export const Text = styled.div`
  letter-spacing: 1px;
  text-align: center;
  margin-left: -30px;
  font-weight: bold;
  margin-top: 20px;
  font-size: 17px;
  color: #a0a0a0;
  width: 300px;
`;

export const WeatherLoading = styled.div`
  position: absolute;
  margin-left: -139px;
  margin-top: -263px;
  height: 110px;
  width: 110px;
  left: 50%;
  top: 50%;

  svg {
    width: 220px;
    height: 220px;
  }

  path {
    stroke: #9ea1a4;
    stroke-width: 0.25;
    fill: #241e20;
  }

  #cloud {
    position: relative;
    z-index: 2;
  }

  #cloud path {
    fill: ${({ cloudColor }) => cloudColor};
  }

  #sun {
    margin-left: -10px;
    margin-top: 6px;
    opacity: 0;
    width: 120px;
    height: 120px;
    position: absolute;
    left: 90px;
    top: 15px;
    z-index: 1;

    animation-name: rotate;
    animation-duration: 16000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  #sun path {
    stroke-width: 0.18;
    fill: ${({ sunColor }) => sunColor};
  }

  @keyframes rotate {
    0% {
      transform: rotateZ(0deg);
    }

    100% {
      transform: rotateZ(360deg);
    }
  }
`;
