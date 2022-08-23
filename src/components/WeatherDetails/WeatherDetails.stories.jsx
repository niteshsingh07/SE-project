/* eslint-disable import/no-anonymous-default-export */

import React from 'react';
import WeatherDetails from './WeatherDetails';

export default {
  title: 'Weather Details',
  component: WeatherDetails,
};

const Template = (args) => <WeatherDetails {...args} />;
export const Default = Template.bind({});
Default.args = {};
