import React from "react";
import { withKnobs, boolean, select, text } from "@storybook/addon-knobs";

export default {
  title: "Button",
  decorators: [withKnobs]
};

const buttonSizes = {
  Small: "sm",
  Medium: "md",
  Large: "lg",
  "Extra Large": "xl"
};

const buttonLayouts = {
  Label: "label",
  "Icon + Label": "icon-label",
  Icon: "icon"
};

const buttonVariations = {
  Primary: "primary",
  Warning: "warning",
  Default: "default",
  Destructive: "destructive"
};

const buttonTypes = {
  Outline: "outline",
  Ghost: "ghost",
  Solid: "solid",
  WhiteBorder: "white-border"
};

export const Default = () => {
  let iconPosition;
  const layout = select("Layout", buttonLayouts, "label");
  const size = select("Size", buttonSizes, "md");
  const variation = select("Variation", buttonVariations, "primary");
  const btnType = select("Type", buttonTypes, "solid");
  const disabled = boolean("Disabled", false);
  const noBorderRadius = boolean("No border radius", false);
  const buttonText = text("Text", "Click Me");
  const fullWidth = boolean("Full width", false);
  const alignment = text("alignment (dev only)", "");
  if (layout.includes("icon")) {
    iconPosition = select("Icon position", ["left", "right", "top"], "left");
  }

  return (
    <smtt-button
      icon-position={iconPosition}
      full-width={fullWidth}
      layout={layout}
      alignment={alignment}
      variation={variation}
      no-border-radius={noBorderRadius}
      btn-type={btnType}
      icon={["icon", "icon-label"].includes(layout) ? `states-complete` : null}
      disabled={disabled}
      size={size}
    >
      {buttonText}
    </smtt-button>
  );
};

/**
 * Buttons - Label
 */
export const PrimarySolid = () => (
  <smtt-button theme="primary">Click Me</smtt-button>
);

export const PrimaryOutline = () => (
  <smtt-button theme="primary" btn-type="outline">
    Click Me
  </smtt-button>
);

export const PrimaryGhost = () => (
  <smtt-button theme="primary" btn-type="ghost">
    Click Me
  </smtt-button>
);

/**
 * Buttons - Icon + Label
 */
export const PrimaryWithIcon = () => (
  <smtt-button
    icon-right
    layout="icon-label"
    icon="states-complete"
    variation="primary"
  >
    Click Me
  </smtt-button>
);

export const PrimaryOutlineWithIcon = () => (
  <smtt-button
    icon-right
    layout="icon-label"
    btn-type="outline"
    icon="states-complete"
    variation="primary"
  >
    Click Me
  </smtt-button>
);

export const PrimaryGhostWithIcon = () => (
  <smtt-button
    layout="icon-label"
    btn-type="ghost"
    icon="states-complete"
    variation="primary"
  >
    Click Me
  </smtt-button>
);

/**
 * Buttons - Icon
 */
export const IconOnlyPrimary = () => {
  return (
    <smtt-button
      layout="icon"
      icon="states-complete"
      variation="primary"
    ></smtt-button>
  );
};

/**
 * Button - Sizing
 */
export const Sizing = () => (
  <div>
    <smtt-button size="sm">Click Me</smtt-button>
    <br />
    <smtt-button size="md">Click Me</smtt-button>
    <br />
    <smtt-button size="lg">Click Me</smtt-button>
    <br />
    <smtt-button size="xl">Click Me</smtt-button>
    <br />
  </div>
);
