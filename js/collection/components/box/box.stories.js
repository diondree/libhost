import React from 'react';
import { withKnobs, select, number, text } from '@storybook/addon-knobs';

export default {
  title: 'Checkbox',
  decorators: [withKnobs]
};

export const Default = () => {

  return (
    <smtt-checkbox label="the checkbox" onChange={console.log}></smtt-checkbox>
  );
};
