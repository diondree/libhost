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

  return (
    <smtt-wizard name={name} sub-heading={subHeading}>
      <smtt-wizard-step name="Change admin password" sub-heading="Instructions">
        <div>
          <smtt-input name="name" label="Name"></smtt-input>
        </div>
      </smtt-wizard-step>

      <smtt-wizard-step
        name="Two-Factor authentication"
        sub-heading="Instructions"
      >
        Step content 2
      </smtt-wizard-step>

      <smtt-wizard-step name="Create System Admin" sub-heading="Instructions">
        Step content 3
      </smtt-wizard-step>

      <smtt-wizard-step
        name="Change database user password"
        sub-heading="Instructions"
      >
        Step content 4
      </smtt-wizard-step>
    </smtt-wizard>
  );
};

export const EightSteps = () => {
  return (
    <smtt-wizard
      name="Name of the task"
      sub-heading="In this area, the user can find the task instructions. The instructions can be displayed on two lines."
    >
      <smtt-wizard-step
        key="Change admin password"
        name="Change admin password"
        sub-heading="Instructions"
      >
        <div>
          <smtt-input name="name" label="Name"></smtt-input>
        </div>
      </smtt-wizard-step>

      <smtt-wizard-step
        key="Two-Factor authentication"
        name="Two-Factor authentication"
        sub-heading="Instructions"
      >
        Step content 2
      </smtt-wizard-step>

      <smtt-wizard-step
        key="Create System Admin"
        name="Create System Admin"
        sub-heading="Instructions"
      >
        Step content 3
      </smtt-wizard-step>

      <smtt-wizard-step
        key="Change database user password"
        name="Change database user password"
        sub-heading="Instructions"
      >
        Step content 4
      </smtt-wizard-step>
      <smtt-wizard-step
        key="Deployment information"
        name="Deployment information"
        sub-heading="Instructions"
      >
        Step content 5
      </smtt-wizard-step>
      <smtt-wizard-step
        key="Security information"
        name="Security information"
        sub-heading="Instructions"
      >
        Step content 6
      </smtt-wizard-step>
      <smtt-wizard-step
        key="Another step name goes here"
        name="Another step name goes here"
        sub-heading="Instructions"
      >
        Step content 7
      </smtt-wizard-step>
      <smtt-wizard-step key="Review" name="Review" sub-heading="Instructions">
        Step content 8
      </smtt-wizard-step>
    </smtt-wizard>
  );
};
