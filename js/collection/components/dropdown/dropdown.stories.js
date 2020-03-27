import React from 'react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';

export default {
  title: 'Dropdown',
  decorators: [withKnobs]
};


export const Default = () => {
  const name = text('Dropdown Title', 'Event short name');
  const subheading = text('Dropdown Subheading', '');
  const fullWidth = boolean('Full Width', false);
  const hasIcons = boolean('Has Icons', false)

  return (
    <smtt-dropdown name={name} sub-heading={subheading} full-width={fullWidth} has-icons={hasIcons}>
      <smtt-dropdown-item icon="plus-square">Test Item 1</smtt-dropdown-item>
      <smtt-dropdown-item>Test Item 2</smtt-dropdown-item>
      <smtt-dropdown-item>Test Item 3</smtt-dropdown-item>
    </smtt-dropdown>
  );
};

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
    <div style={{ padding: '0 16px' }}>
      <smtt-button full-width>Go to list of Events panel</smtt-button>
    </div>
  </smtt-dropdown>
);

export const WithIcons = () => (
  <smtt-dropdown name="Dropdown" has-icons={true}>
    <smtt-dropdown-item icon="plus-square">Test Item 1</smtt-dropdown-item>
    <smtt-dropdown-item icon="minus-square">Test Item 2</smtt-dropdown-item>
    <smtt-dropdown-item icon="export">Test Item 3</smtt-dropdown-item>
  </smtt-dropdown>
)
