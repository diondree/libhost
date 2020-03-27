import React from 'react';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';

export default {
  title: 'Contextual Box',
  decorators: [withKnobs]
};

const variationOptions = {
  Success: 'success',
  Warning: 'warning',
  Info: 'info',
  Error: 'error'
};

export const Default = () => {
  const isVisible = boolean('Visible', true);
  const title = text('Message Title', 'Feedback message title');
  const instructions = text(
    'Intructions',
    'Place it just after Overview component and before first page’s content. The width should be 12 columns.'
  );
  const variation = select('Variation', variationOptions, 'success');
  const dismissable = boolean('Dismissable', true);

  return (
    <div>
      <smtt-contextual-box
        message-title={title}
        variation={variation}
        instructions={instructions}
        dismissable={dismissable}
        is-visible={isVisible}
      ></smtt-contextual-box>
      <p>Loremm ipsum diem</p>
    </div>
  );
};
