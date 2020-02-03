import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

export default {
  title: 'Dropdown',
  decorators: [withKnobs]
};

export const ControlledWithKnobs = () => {
  const name = text('Dropdown Title', 'Event short name');
  const subheading = text('Dropdown Subheading', '');
  const fullWidth = boolean('Full Width', false);

  return (
    <smtt-dropdown name={name} sub-heading={subheading} full-width={fullWidth}>
      <smtt-dropdown-item>Test Item 1</smtt-dropdown-item>
      <smtt-dropdown-item>Test Item 2</smtt-dropdown-item>
      <smtt-dropdown-item>Test Item 3</smtt-dropdown-item>
    </smtt-dropdown>
  );
};

export const Basic = () => (
  <smtt-dropdown name="Dropdown">
    <smtt-dropdown-item>Test Item 1</smtt-dropdown-item>
    <smtt-dropdown-item>Test Item 2</smtt-dropdown-item>
    <smtt-dropdown-item>Test Item 3</smtt-dropdown-item>
  </smtt-dropdown>
);

export const WithSubheading = () => (
  <smtt-dropdown name="Dropdown" sub-heading="Subheading">
    <smtt-dropdown-item>Test Item 1</smtt-dropdown-item>
    <smtt-dropdown-item>Test Item 2</smtt-dropdown-item>
    <smtt-dropdown-item>Test Item 3</smtt-dropdown-item>
  </smtt-dropdown>
);

export const WithGroups = () => (
  <smtt-dropdown name="Dropdown">
    <smtt-dropdown-group name="Mun-Reg 2018">
      <smtt-dropdown-item>Test Item 1</smtt-dropdown-item>
      <smtt-dropdown-item>Test Item 2</smtt-dropdown-item>
      <smtt-dropdown-item>Test Item 3</smtt-dropdown-item>
    </smtt-dropdown-group>
    <smtt-dropdown-group name="Primary election 2019">
      <smtt-dropdown-item>Test Item 1</smtt-dropdown-item>
      <smtt-dropdown-item>Test Item 2</smtt-dropdown-item>
      <smtt-dropdown-item>Test Item 3</smtt-dropdown-item>
    </smtt-dropdown-group>
    <smtt-dropdown-group name="General election 2019">
      <smtt-dropdown-item>Test Item 1</smtt-dropdown-item>
      <smtt-dropdown-item>Test Item 2</smtt-dropdown-item>
      <smtt-dropdown-item>Test Item 3</smtt-dropdown-item>
    </smtt-dropdown-group>
    <smtt-button full-width>Go to list of Events panel</smtt-button>
  </smtt-dropdown>
);

export const LeftPostion = () => (
  <smtt-dropdown name="Dropdown" menu-position="left">
    <smtt-dropdown-item>Test Item 1</smtt-dropdown-item>
    <smtt-dropdown-item>Test Item 2</smtt-dropdown-item>
    <smtt-dropdown-item>Test Item 3</smtt-dropdown-item>
  </smtt-dropdown>
);
