import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

export default {
  title: 'Wizard',
  decorators: [withKnobs]
};

const stepOptions = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8
};

export const Default = () => {
  const name = text('Title of Wizard', 'Name of the task');
  const subHeading = text(
    'Subheading/Instructions',
    'In this area, the user can find the task instructions. The instructions can be displayed on two lines.'
  );
  // control number of steps
  const stepNumber = select('Number of steps', stepOptions, 4);

  const steps = [
    <smtt-wizard-step name="Change admin password" sub-heading="Instructions">
      <div>
        <smtt-input name="name" label="Name"></smtt-input>
      </div>
    </smtt-wizard-step>,
    <smtt-wizard-step
      name="Two-Factor authentication"
      sub-heading="Instructions"
    >
      Step content 2
    </smtt-wizard-step>,
    <smtt-wizard-step name="Create System Admin" sub-heading="Instructions">
      Step content 3
    </smtt-wizard-step>,
    <smtt-wizard-step
      name="Change database user password"
      sub-heading="Instructions"
    >
      Step content 4
    </smtt-wizard-step>
  ];

  steps.splice(stepNumber);
  console.log('dreger');
  console.log(steps);

  return (
    <smtt-wizard name={name} sub-heading={subHeading}>
      {steps.map(step => step)}
    </smtt-wizard>
  );
};
