import React from 'react';
import { WeatherContextProvider } from '../contexts/weatherContext';
import Homepage from '../views/Homepage';

require('dotenv').config();

const App = () => {
  return (
    <WeatherContextProvider>
      <WeatherContextProvider>
        <Homepage />
      </WeatherContextProvider>
    </WeatherContextProvider>
  );
};

export default App;
