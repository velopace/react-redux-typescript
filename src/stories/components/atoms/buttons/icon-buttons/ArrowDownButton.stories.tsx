import React from "react";
import { Story, Meta } from "@storybook/react";

import { ArrowDownIconButton, ArrowDownIconButtonProps } from "components";

export default {
  title: "Polaris/components/atoms/buttons/icon-buttons/ArrowDownIconButton",
  component: ArrowDownIconButton,
} as Meta<ArrowDownIconButtonProps>;

const Template: Story<ArrowDownIconButtonProps> = (
  args: ArrowDownIconButtonProps
) => <ArrowDownIconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "default",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};
