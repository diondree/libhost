import React from 'react';
import { withKnobs, boolean, select, text, number, } from '@storybook/addon-knobs';

export default {
  title: 'Toast',
  decorators: [withKnobs]
};

export const Default = () => {
  const message = text('Toast message', 'This is a toast');
  const header = text('Toast header', 'This is a toast');
  const duration = number('Toast duration (seconds)', 3);
  const type = select('Toast type', ['select a type...','error', 'success', 'info', 'warning'], 'success' )

  const msDuration = duration * 1000 
  return (
  <smtt-button
    onClick={() => {
      if (!toast) {
        var toast = document.querySelector('#error');
      }
      toast[type]({
        message,
        header,
        duration: msDuration
      });
    }}
  >
    <smtt-toast id="error"></smtt-toast>
    Activate toast
  </smtt-button>
  );
};

export const Error = () => (
  <smtt-button
    onClick={() => {
      if (!toast) {
        var toast = document.querySelector('#error');
      }
      toast.error({
        message: 'This is a message',
        header: 'Header'
      });
    }}
  >
    <smtt-toast id="error"></smtt-toast>
    Activate toast
  </smtt-button>
);

export const Success = () => (
  <smtt-button
    onClick={() => {
      if (!toast) {
        var toast = document.querySelector('#success');
      }
      toast.success({
        message: 'This is a message',
        header: 'Header',
        duration: 1000,
      });
    }}
  >
    <smtt-toast id="success"></smtt-toast>
    Activate toast
  </smtt-button>
);

export const Info = () => (
  <smtt-button
    onClick={() => {
      if (!toast) {
        var toast = document.querySelector('#info');
      }      
      toast.info({
        type: "info",
        message: 'This is a message',
        header: 'Header',
        duration: 1000,
      });
    }}
  >
    <smtt-toast id="info"></smtt-toast>
    Activate toast
  </smtt-button>
);
export const Warning = () => (
  <smtt-button
    onClick={() => {
      if (!toast) {
        var toast = document.querySelector('#warning');
      }      
      toast.warning({
        type: "warning",
        message: 'This is a message',
        header: 'Header',
        duration: 1000,
      });
    }}
  >
    <smtt-toast id="warning"></smtt-toast>
    Activate toast
  </smtt-button>
);
