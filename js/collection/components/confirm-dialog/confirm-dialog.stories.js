import React from 'react';
import { withKnobs, select, number, text } from '@storybook/addon-knobs';

export default {
  title: 'Confirm Dialog',
  decorators: [withKnobs]
};

export const Default = () => {
  const bodyText = text(
    'Text',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, molestias!'
  );
  const type = select('Type', ['warning', 'info', 'success'], 'warning');
  const header = text('HeaderText', 'Heading');
  const justify = select(
    'trigger horizontal alignment',
    ['start', 'center', 'end'],
    'center'
  );

  return (
    <div style={{ display: 'flex', justifyContent: (justify === 'center' ? justify : `flex-${justify}`) }}>
      <smtt-confirm-dialog type={type} text={bodyText} header={header}>
        <smtt-button>click</smtt-button>
      </smtt-confirm-dialog>
    </div>
  );
};

/**
 * Buttons - Label
 */
export const Warning = () => (
  <smtt-confirm-dialog
    type="warning"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, molestias!"
    header="Heading"
  >
    <smtt-button>click</smtt-button>
  </smtt-confirm-dialog>
);

export const Info = () => (
  <smtt-confirm-dialog
    type="info"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, molestias!"
    header="Heading"
  >
    <smtt-button>click</smtt-button>
  </smtt-confirm-dialog>
);

export const Success = () => (
  <smtt-confirm-dialog
    type="success"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, molestias!"
    header="Heading"
  >
    <smtt-button>click</smtt-button>
  </smtt-confirm-dialog>
);
