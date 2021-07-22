import React from "react";
import { Story, Meta } from "@storybook/react";

import { ArrowUpIconButton, ArrowUpIconButtonProps } from "components";

export default {
  title: "Polaris/components/atoms/buttons/icon-buttons/ArrowUpIconButton",
  component: ArrowUpIconButton,
} as Meta<ArrowUpIconButtonProps>;

const Template: Story<ArrowUpIconButtonProps> = (
  args: ArrowUpIconButtonProps
) => <ArrowUpIconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "default",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};
