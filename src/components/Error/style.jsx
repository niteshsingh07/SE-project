import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ErrorDog = styled.img`
  margin: 0 auto;
`;

export const ErrorMessage = styled.div`
  font-family: Arial;
  font-size: 23px;
  margin-top: -3.5rem;
  margin-bottom: 2.5rem;
`;

export const ButtonReload = styled.button`
  box-shadow: 0px 0px 0px 2px #9fb4f2;
  background-color: #a0e5f5a1;
  border-radius: 10px;
  border: 1px solid #4e6096;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 23px;
  padding: 12px 37px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #283966;

  &:hover {
    background-color: #476e9e;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
