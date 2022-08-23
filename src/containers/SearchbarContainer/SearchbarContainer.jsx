import React, { useEffect, useState, useContext } from 'react';
import SearchBar from '../../components/SearchBar';
import { WeatherContext } from '../../contexts/weatherContext';

import * as S from '../../views/Homepage/style';

const SearchbarContainer = () => {
  const weatherContextValue = useContext(WeatherContext);

  const [value, setValue] = useState('');

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      // TODO: Create Debounce component
      weatherContextValue.setResult({
        ...weatherContextValue.result,
        city: value,
      });
    }, 700);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [value]);

  return (
    <S.Header>
      <S.HeaderWrapper>
        <SearchBar
          placeholder='where are we...🤔'
          onChangeHandler={onChangeHandler}
          onSubmitHandler={onSubmitHandler}
          value={value}
        />
      </S.HeaderWrapper>
    </S.Header>
  );
};

export default SearchbarContainer;
