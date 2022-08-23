/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Icon from './Icon';

export default {
  title: 'Icon',
  component: Icon,
};

const Template = (args) => <Icon {...args} />;
export const Default = Template.bind({});
Default.args = {
  src:
    'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
  width: '40px',
  height: '40px',
};
