import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Separator',
  decorators: [withKnobs]
};

export const Default = () => {
  return <smtt-separator></smtt-separator>
}
