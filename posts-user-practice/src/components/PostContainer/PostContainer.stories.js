import React from 'react';

import PostContainer from './PostContainer';

export default {
  title: 'Components/Post container',
  component: PostContainer,
};

const Template = args => <PostContainer {...args} />;

export const Default = Template.bind({});
Default.args = {
  darkMode: false
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  darkMode: true
};
