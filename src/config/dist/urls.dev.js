'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports['default'] = void 0;

/* eslint-disable import/no-anonymous-default-export */
var _default = {
  weather: {
    base: 'https://api.openweathermap.org/data/2.5',
    forecast: function forecast(query) {
      return '/onecall?'
        .concat(query, '&units=metric&appid=')
        .concat(process.env.REACT_APP_API_KEY);
    },
    current: function current(query) {
      return '/weather?q='
        .concat(query, '&units=metric&appid=')
        .concat(process.env.REACT_APP_API_KEY);
    },
  },
};
exports['default'] = _default;
