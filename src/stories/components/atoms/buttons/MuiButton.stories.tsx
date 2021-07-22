import React from "react";
import { Story, Meta } from "@storybook/react";

import { MuiButton, MuiButtonProps } from "components";

export default {
  title: "Polaris/components/atoms/buttons/MuiButton",
  component: MuiButton,
} as Meta<MuiButtonProps>;

const Template: Story<MuiButtonProps> = (args: MuiButtonProps) => (
  <MuiButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  variant: "main",
  children: "Default Button",
};

export const disabledDefault = Template.bind({});
disabledDefault.args = {
  variant: "main",
  children: "Disabled Main Button",
  disabled: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "Secondary Button",
};

export const disabledSecondary = Template.bind({});
disabledSecondary.args = {
  variant: "secondary",
  children: "Disabled Secondary Button",
  disabled: true,
};
