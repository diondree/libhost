import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

export default {
  title: 'Button',
  decorators: [withKnobs]
};

const buttonSizes = {
  Default: '',
  Small: 'sm',
  Medium: 'md',
  Large: 'lg'
};

const buttonVariations = {
  Label: 'label',
  'Icon + Label': 'icon-label',
  Icon: 'icon'
};

const buttonThemes = {
  Primary: 'primary',
  Secondary: 'default',
  Tertiary: 'tertiary'
};

export const Default = () => {
  const variation = select('Variation', buttonVariations, 'label');
  const size = select('Size', buttonSizes, '');
  const theme = select('Theme', buttonThemes, 'primary');
  const disabled = boolean('Disabled', false);
  const buttonText = text('Text', 'Click Me');

  return (
    <smtt-button
      variation={variation}
      icon={
        ['icon', 'icon-label'].includes(variation) ? `states-complete` : null
      }
      theme={theme}
      disabled={disabled}
      size={size}
    >
      {buttonText}
    </smtt-button>
  );
};

/**
 * Buttons - Label
 */
export const Primary = () => (
  <smtt-button theme="primary">Click Me</smtt-button>
);

export const Secondary = () => (
  <smtt-button theme="default">Click Me</smtt-button>
);

export const Tertiary = () => (
  <smtt-button theme="tertiary">Click Me</smtt-button>
);

/**
 * Buttons - Icon + Label
 */
export const PrimaryWithIcon = () => (
  <smtt-button variation="icon-label" icon="states-complete" theme="primary">
    Click Me
  </smtt-button>
);

export const SecondaryWithIcon = () => (
  <smtt-button variation="icon-label" icon="states-complete" theme="default">
    Click Me
  </smtt-button>
);

export const TertiaryWithIcon = () => (
  <smtt-button variation="icon-label" icon="states-complete" theme="tertiary">
    Click Me
  </smtt-button>
);

/**
 * Buttons - Icon
 */
export const IconOnlyPrimary = () => {
  return (
    <smtt-button
      variation="icon"
      icon="states-complete"
      theme="primary"
    ></smtt-button>
  );
};

export const IconOnlySecondary = () => {
  return (
    <smtt-button
      variation="icon"
      icon="states-complete"
      theme="default"
    ></smtt-button>
  );
};

export const IconOnlyTertiary = () => {
  return (
    <smtt-button
      variation="icon"
      icon="states-complete"
      theme="tertiary"
    ></smtt-button>
  );
};

/**
 * Button - Sizing
 */
export const Sizing = () => (
  <div>
    <smtt-button class="mb-3" size="sm">
      Click Me
    </smtt-button>
    <smtt-button class="mb-3" size="md">
      Click Me
    </smtt-button>
    <smtt-button class="mb-3" size="lg">
      Click Me
    </smtt-button>
  </div>
);
