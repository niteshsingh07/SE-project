/* eslint-disable import/no-anonymous-default-export */

import React from 'react';
import CurrentWeather from './';

export default {
  title: 'Current Weather',
  component: CurrentWeather,
};

const Template = (args) => <CurrentWeather {...args} />;
export const Default = Template.bind({});
Default.args = {
  headerTitleText: 'test',
  headerSubtitleText: 'test',
  src:
    'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
  width: '150px',
  height: '150px',
  bodyTitleText: 'test',
  bodySubtitleText: 'test',
};
