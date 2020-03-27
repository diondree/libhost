import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

export default {
  title: 'Header',
  decorators: [withKnobs]
};

export const Default = () => {
  const breadcrumb = text('Breadcrumbs', '');
  const headerMessage = text('Header Message', '');
  const leftMenuTitle = text('Left Menu Title', 'Event short name');
  const userMenuTitle = text('User Menu Title', 'Username');

  return (
    <smtt-header
      breadcrumb={breadcrumb}
      header-message={headerMessage}
      left-menu-title={leftMenuTitle}
      user-menu-title={userMenuTitle}
    >
      <div slot="left-menu-items">
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
      </div>
      <div slot="user-menu-items">
        <smtt-dropdown-item>
          <smtt-icon class="mr-2" icon="lock"></smtt-icon>
          Change Password
        </smtt-dropdown-item>
        <smtt-dropdown-item>
          <smtt-icon class="mr-2" icon="sign-out-alt"></smtt-icon>
          Logout
        </smtt-dropdown-item>
      </div>
    </smtt-header>
  );
};

export const Basic = () => {
  return (
    <smtt-header left-menu-title="Event short name" user-menu-title="Username">
      <div slot="left-menu-items">
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
      </div>
      <div slot="user-menu-items">
        <smtt-dropdown-item>
          <smtt-icon class="mr-2" icon="lock"></smtt-icon>
          Change Password
        </smtt-dropdown-item>
        <smtt-dropdown-item>
          <smtt-icon class="mr-2" icon="sign-out-alt"></smtt-icon>
          Logout
        </smtt-dropdown-item>
      </div>
    </smtt-header>
  );
};

export const WithBreacrumb = () => {
  return (
    <smtt-header
      left-menu-title="Event short name"
      user-menu-title="Username"
      breadcrumb="Welcome"
    >
      <div slot="left-menu-items">
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
      </div>
      <div slot="user-menu-items">
        <smtt-dropdown-item>
          <smtt-icon class="mr-2" icon="lock"></smtt-icon>
          Change Password
        </smtt-dropdown-item>
        <smtt-dropdown-item>
          <smtt-icon class="mr-2" icon="sign-out-alt"></smtt-icon>
          Logout
        </smtt-dropdown-item>
      </div>
    </smtt-header>
  );
};

export const WithMessage = () => {
  return (
    <smtt-header
      left-menu-title="Event short name"
      user-menu-title="Username"
      breadcrumb="Welcome"
      header-message="This is a message below the header with a warning message."
    >
      <div slot="left-menu-items">
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
      </div>
      <div slot="user-menu-items">
        <smtt-dropdown-item>
          <smtt-icon class="mr-2" icon="lock"></smtt-icon>
          Change Password
        </smtt-dropdown-item>
        <smtt-dropdown-item>
          <smtt-icon class="mr-2" icon="sign-out-alt"></smtt-icon>
          Logout
        </smtt-dropdown-item>
      </div>
    </smtt-header>
  );
};
