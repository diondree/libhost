import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import iconOptions from './icon-map.json';

export default {
  title: 'Icon',
  decorators: [withKnobs]
};

const widthOptions = {
  24: '24px',
  50: '50px',
  100: '100px',
  150: '150px'
};

const colorOptions = {
  Black: 'var(--black)',
  'Ink Base': 'var(--ink-base)',
  'Turquoise Base': 'var(--turquoise-base)',
  'Red Base': 'var(--red-base)'
};

export const ControlledWithKnobs = () => {
  const icon = select('Icon', iconOptions, 'user');
  const color = select('Color', colorOptions, 'var(--black)');
  const width = select('Width', widthOptions, '24px');

  return <smtt-icon color={color} icon={icon} width={width}></smtt-icon>;
};
