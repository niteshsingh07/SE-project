import React, { useState } from 'react';

const initState = {
  city: '',
  lat: 0,
  lon: 0,
  errors: false,
  errorCode: 0,
};

export const WeatherContext = React.createContext(initState);

export const WeatherContextProvider = ({ children }) => {
  const [result, setResult] = useState(initState);
  return (
    <WeatherContext.Provider value={{ result, setResult }}>
      {children}
    </WeatherContext.Provider>
  );
};
