/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import WeatherCard from './';

export default {
  title: 'Weather Card',
  component: WeatherCard,
};

const Template = (args) => <WeatherCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'lightgray',
  opacity: 0.2,
  text1: 'text1',
  text2: 'text2',
  src: `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png`,
  text3: 'text3',
};
