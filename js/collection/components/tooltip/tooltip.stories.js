import React from 'react';
import {
  withKnobs,
  boolean,
  select,
  text,
  number
} from '@storybook/addon-knobs';

export default {
  title: 'Tooltip',
  decorators: [withKnobs]
};

export const Default = () => {
  return (
    <div>
      <div
        class="tooltips"
        style={{
          'min-height': '100vh',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `  div[class^="tooltips__row"] {
    display: flex;
    flex-basis: 100%;
    justify-content: center;
    margin-bottom: 15px;
  }

  div[class^="tooltips__row"] :not(:first-child) {
    margin-left: 140px;
  }
  div.tooltips__row-3 :not(:first-child) {
    margin-left: 280px;
  }`
            }}
          ></style>
          <div class="tooltips__row-1">
        <smtt-tooltip text="top" position="top">
          <smtt-button layout="icon" icon="arrow-up">
          </smtt-button>
        </smtt-tooltip>
      </div>
      <div class="tooltips__row-2">
        <smtt-tooltip text="top left tooltip" position="top-left">
          <smtt-button layout="icon" icon="arrow-left">
          </smtt-button>
        </smtt-tooltip>
        <smtt-tooltip text="top right tooltip" position="top-right">
          <smtt-button layout="icon" icon="arrow-right">
          </smtt-button>
        </smtt-tooltip>
      </div>
      <div class="tooltips__row-3">
        <smtt-tooltip text="left" position="left">
          <smtt-button layout="icon" icon="arrow-left">
          </smtt-button>
        </smtt-tooltip>
        <smtt-tooltip text="right" position="right">
          <smtt-button layout="icon" icon="arrow-right">
          </smtt-button>
        </smtt-tooltip>
      </div>
      <div class="tooltips__row-4">
        <smtt-tooltip text="bottom left tooltip" position="bottom-left">
          <smtt-button layout="icon" icon="arrow-left">
          </smtt-button>
        </smtt-tooltip>
        <smtt-tooltip text="bottom right tooltip" position="bottom-right">
          <smtt-button layout="icon" icon="arrow-right">
          </smtt-button>
        </smtt-tooltip>
      </div>
      <div class="tooltips__row-1">
        <smtt-tooltip text="bottom" position="bottom">
          <smtt-button layout="icon" icon="arrow-down">
          </smtt-button>
        </smtt-tooltip>
      </div>
        </div>
      </div>
    </div>
  );
};
