import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

export default {
  title: 'Password',
  decorators: [withKnobs]
};

export const ControlledWithKnobs = () => {
  const label = text('Input field label', 'Label');
  const helpText = text('Input field help text', '');
  const placeholder = text('Input field placeholder', 'placeholder...');
  const pattenName = text(
    'Pattern name (regex validator e.g only-number, only-chars, url, hex-colors)',
    ''
  );
  const errorMessage = text(
    'Invalid error message',
    'please enter valid input'
  );
  const required = boolean('Required', false);
  const disabled = boolean('Disabled', false);
  const fullWidth = boolean('Full width', false);

  return (
    <smtt-input
      label={label}
      help-text={helpText}
      placeholder={placeholder}
      name="myInput"
      error-msg={errorMessage}
      pattern-name={pattenName}
      required={required}
      disabled={disabled}
      full-width={fullWidth}
      type="password"
    ></smtt-input>
  );
};

export const Basic = () => (
  <smtt-input
    label="test"
    placeholder="test..."
    name="myInput"
    error-msg="something's wrong"
    type="password"
  ></smtt-input>
);

export const RequiredInput = () => (
  <smtt-input
    label="test"
    placeholder="test..."
    name="myInput"
    error-msg="Your input seems invalid"
    required
    type="password"
  ></smtt-input>
);

export const disabled = () => (
  <smtt-input
    label="test"
    placeholder="test..."
    name="myInput"
    error-msg="Your input seems invalid"
    pattern-name="only-number"
    disabled
    type="password"
  ></smtt-input>
);
