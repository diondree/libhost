import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

export default {
  title: 'Footer',
  decorators: [withKnobs]
};

export const Default = () => {
  const hash = text('Footer hash', '');

  return <smtt-footer hash={hash}></smtt-footer>;
};
export const WithHash = () => {
  return <smtt-footer hash="vjiew98rfjv0r935ut498efwco"></smtt-footer>;
};
