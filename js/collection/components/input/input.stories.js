import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

export default {
  title: 'Input',
  decorators: [withKnobs]
};

export const Default = () => {
  const label = text('Input field label', 'Label');
  const type = text('Input field type', 'text');
  const icon = text('Input field icon', null);
  const iconPlacement = select('Icon placement', ['icon-right', 'icon-left'], 'icon-right');
  const maxlength = text('Input field maximum length', '');
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
  const readonly = boolean('readonly', false);
  const disabled = boolean('Disabled', false);
  const fullWidth = boolean('Full width', false);

  return (
    <smtt-input
      label={label}
      help-text={helpText}
      icon={icon}
      icon-placement={iconPlacement}
      placeholder={placeholder}
      name="myInput"
      error-msg={errorMessage}
      readonly={readonly}
      maxlength={maxlength}
      pattern-name={pattenName}
      required={required}
      disabled={disabled}
      full-width={fullWidth}
      type={type}
      value="firstttttt"
    ></smtt-input>
  );
};

export const Basic = () => (
  <smtt-input
    label="test"
    placeholder="test..."
    name="myInput"
    error-msg="something's wrong"
    pattern-name="only-number"
  ></smtt-input>
);

export const NumbersOnly = () => (
  <smtt-input
    label="test"
    placeholder="test..."
    name="myInput"
    error-msg="Please input a number"
    pattern-name="only-number"
    required
  ></smtt-input>
);

export const RequiredInput = () => (
  <smtt-input
    label="test"
    placeholder="test..."
    name="myInput"
    error-msg="Your input seems invalid"
    required
  ></smtt-input>
);

export const Disabled = () => (
  <smtt-input
    label="test"
    placeholder="test..."
    name="myInput"
    error-msg="Your input seems invalid"
    pattern-name="only-number"
    disabled
  ></smtt-input>
);
