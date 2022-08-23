/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Subtitle from './Subtitle';

export default {
  title: 'Subtitle',
  component: Subtitle,
};

const Template = (args) => <Subtitle {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: '11.12.13 Nice Day',
  size: '25px',
};
