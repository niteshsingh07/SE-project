/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import WeatherLoading from './';

export default {
  title: 'Weather Loading',
  component: WeatherLoading,
};

const Template = (args) => <WeatherLoading {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'LOOKING OUTSIDE FOR YOU... ONE SEC',
  cloudColor: 'lightyellow',
  sunColor: 'yellow',
};
