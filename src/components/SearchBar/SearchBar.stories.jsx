/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import SearchBar from './SearchBar';

export default {
  title: 'Search Bar',
  component: SearchBar,
  argTypes: {
    onClick: { action: 'onClick' },
    onChange: { action: 'onChange' },
  },
};

const Template = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Waiting for city...',
};
