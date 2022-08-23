/* eslint-disable import/no-anonymous-default-export */
export default {
  weather: {
    base: 'https://api.openweathermap.org/data/2.5',
    forecast: (query) =>
      `/onecall?${query}&units=metric&appid=${process.env.REACT_APP_API_KEY}`,
    current: (query) =>
      `/weather?q=${query}&units=metric&appid=${process.env.REACT_APP_API_KEY}`,
  },
};
