import styled from 'styled-components';

export const Spinner = styled.div.attrs((props) => ({
  className: 'loader',
}))`
  border: 7px solid #f3f3f3;
  border-top: 7px solid ${({ color }) => color};
  border-radius: 50%;
  width: 35px;
  height: 35px;
  animation: spin 1.2s infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
