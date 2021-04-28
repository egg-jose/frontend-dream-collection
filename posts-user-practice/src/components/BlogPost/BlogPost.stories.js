import React from 'react';

import BlogPost from './BlogPost';

export default {
  title: 'Components/Post',
  component: BlogPost,
};

const Template = args => <BlogPost {...args} />;

const mookData = {
  title: "Lorem ipsum",
  body: "Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget malesuada.",
  userId: 1
}

export const Default = Template.bind({});
Default.args = {
  headerColor: '#000',
  ...mookData,
  primary: false
};

export const Primary = Template.bind({});
Primary.args = {
  ...mookData,
  primary: true,
  headerColor: 'violet'
};

export const ChangeColor = Template.bind({});
ChangeColor.args = {
  ...mookData,
  headerColor: '#fff'
};
