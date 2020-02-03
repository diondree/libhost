import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

export default {
  title: 'Footer',
  decorators: [withKnobs]
};

export const ControlledWithKnobs = () => {
  const hash = text('Footer hash', '');

  return <smtt-footer hash={hash}></smtt-footer>;
};
export const FooterWithHash = () => {
  return <smtt-footer hash='vjiew98rfjv0r935ut498efwco'></smtt-footer>;
};
export const FooterWithoutHash = () => {
  return <smtt-footer ></smtt-footer>;
};

