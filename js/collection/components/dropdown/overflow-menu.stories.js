import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'Overflow Menu',
  decorators: [withKnobs]
};

export const Default = () => {
  const hasIcons = boolean('Has Icons', false);
  const fullWidth = boolean('Full Width', false);

  return (
    <smtt-dropdown icon="ellipsis-v" has-icons={hasIcons} full-width={fullWidth}>
      <smtt-dropdown-item>Edit coalition</smtt-dropdown-item>
      <smtt-dropdown-item icon="plus-square">Add coalition</smtt-dropdown-item>
      <smtt-dropdown-item icon="address-book">Add Contact Person</smtt-dropdown-item>
      <smtt-dropdown-item>Add Supporters</smtt-dropdown-item>
      <smtt-separator></smtt-separator>
      <smtt-dropdown-item icon="delete">Delete</smtt-dropdown-item>
    </smtt-dropdown>
  );
};
