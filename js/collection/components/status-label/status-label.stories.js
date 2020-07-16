import React from 'react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

export default {
  title: 'Status Label',
  decorators: [withKnobs]
};

const variations = {
  Success: 'success',
  Alert: 'alert',
  Warning: 'warning',
  Neutral: 'neutral',
  Default: 'default',
  Primary: 'primary'
};

export const Default = () => {
  const variation = select('Variation', variations, 'success');
  const subtle = boolean('Subtle', false);
  const labelText = text('Status Label Text', 'Status Label Text');

  return (
    <smtt-status-label variation={variation} subtle={subtle}>
      {labelText}
    </smtt-status-label>
  );
};

export const Alert = () => {
  return <smtt-status-label variation="alert">Alert</smtt-status-label>;
};

export const Success = () => {
  return <smtt-status-label>Completed</smtt-status-label>;
};

export const Warning = () => {
  return <smtt-status-label variation="warning">Warning</smtt-status-label>;
};

export const SubtleAlert = () => {
  return (
    <smtt-status-label subtle variation="alert">
      Failed
    </smtt-status-label>
  );
};

export const SubtleSuccess = () => {
  return <smtt-status-label subtle>success</smtt-status-label>;
};

export const SubtleWarning = () => {
  return (
    <smtt-status-label subtle variation="warning">
      Warning
    </smtt-status-label>
  );
};
