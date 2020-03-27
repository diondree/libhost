import React from 'react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

export default {
  title: 'Status Label',
  decorators: [withKnobs]
};

const variations = {
  Completed: 'completed',
  Pending: 'pending',
  Cancelled: 'cancelled'
};

export const Default = () => {
  const variation = select('Variation', variations, 'completed');
  const subtle = boolean('Subtle', false);
  const labelText = text('Status Label Text', 'Status Label Text');

  return (
    <smtt-status-label variation={variation} subtle={subtle}>
      {labelText}
    </smtt-status-label>
  );
};

export const Cancelled = () => {
  return <smtt-status-label variation="cancelled">Failed</smtt-status-label>;
};

export const Completed = () => {
  return <smtt-status-label>Completed</smtt-status-label>;
};

export const Pending = () => {
  return <smtt-status-label variation="pending">Pending</smtt-status-label>;
};

export const SubtleCancelled = () => {
  return (
    <smtt-status-label subtle variation="cancelled">
      Failed
    </smtt-status-label>
  );
};

export const SubtleCompleted = () => {
  return <smtt-status-label subtle>Completed</smtt-status-label>;
};

export const SubtlePending = () => {
  return (
    <smtt-status-label subtle variation="pending">
      Pending
    </smtt-status-label>
  );
};
