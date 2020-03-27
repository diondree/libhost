import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import iconOptions from './icon-map.json';

export default {
  title: 'Icon',
  decorators: [withKnobs]
};

const widthOptions = {
  24: '24px',
  50: '50px',
  100: '100px',
  150: '150px'
};

const colorOptions = {
  Black: 'var(--black)',
  purple: 'purple',
  green: 'green',
  blue: 'blue',
  grey: 'grey',
  'Ink Base': 'var(--ink-base)',
  'Turquoise Base': 'var(--turquoise-base)',
  'Red Base': 'var(--red-base)'
};

export const Default = () => {
  const icon = select('Icon', iconOptions, 'user');
  const color = select('Color', colorOptions, 'var(--black)');
  const width = select('Width', widthOptions, '24px');

  return <smtt-icon color={color} icon={icon} width={width}></smtt-icon>;
};

export const AllImages = () => {
  let customColorOptions = {
    None: 'none'
  };
  Object.assign(customColorOptions, colorOptions);
  const color = select('Color', customColorOptions, 'none');

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {' '}
      {Object.entries(iconOptions).map(icon => (
        <div
          style={{
            flexWrap: 'wrap',
            display: 'flex',
            justifyContent: 'center',
            margin: '4px',
            padding: '4px',
            border: 'solid thin lightgrey'
          }}
        >
          <div style={{ flexBasis: '100%', textAlign: 'center' }}>
            {icon[1]}
          </div>
          <smtt-icon color={color !== 'none'? color: null} icon={icon[1]} width="24px"></smtt-icon>
        </div>
      ))}
    </div>
  );
};
