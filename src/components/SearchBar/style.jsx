import styled from 'styled-components';

export const SearchBar = styled.form`
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: row;
`;

export const Label = styled.label`
  display: none;
`;

export const Input = styled.input`
  display: flex;
  justify-content: flex-start;
  margin-top: 3rem;
  width: 100%;
  border: 1px solid #ffffff;
  background-color: #ffffff;
  font-size: 1.5rem;
  color: black;
  border-radius: 25px;
  padding: 10px 15px 10px 40px;

  &:focus {
    border: 1px solid #75bcce;
  }
`;

export const SearchIcon = styled.span`
  display: flex;
  justify-content: flex-end;
  margin-top: 4.5rem;
  margin-left: -2rem;
  transform: translate(-50%, -50%);
  height: 14px;
  width: 14px;
  font-size: 14px;
  color: #c5c5c5;
  background-image: url(${({ iconSrc }) => iconSrc});
  top: 4.5rem;
`;
