/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import CardsList from '.';

export default {
  title: 'Card List',
  component: CardsList,
};

const Template = (args) => <CardsList {...args} />;
export const Default = Template.bind({});
Default.args = {
  listTitle: 'Weather Forecast',
  background: 'lightgray',
  opacity: 0.2,
  text1: '# - ',
  text2: '## - ',
  src:
    'https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/14-s.png',
  text3: '### - ',
};
