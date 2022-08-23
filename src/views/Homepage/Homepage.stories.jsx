/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Homepage from '.';

export default {
  title: 'Home Page',
  component: Homepage,
};

const Template = (args) => <Homepage {...args} />;
export const Default = Template.bind({});
Default.args = {};
