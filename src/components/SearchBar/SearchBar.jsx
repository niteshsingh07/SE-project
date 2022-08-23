import React from 'react';
import * as S from './style';

import iconSrc from '../../assets/images/searchIcon.png';

const SearchBar = ({
  placeholder,
  onChangeHandler,
  value,
  onSubmitHandler,
}) => {
  return (
    <S.SearchBar onSubmit={onSubmitHandler}>
      <S.Label htmlFor='search Bar'>Search Bar</S.Label>
      <S.Input
        type='text'
        onChange={onChangeHandler}
        value={value}
        placeholder={placeholder}
      />
      <S.SearchIcon iconSrc={iconSrc} />
    </S.SearchBar>
  );
};

export default SearchBar;
