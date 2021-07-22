import React from "react";
import { Story, Meta } from "@storybook/react";

import { TrashIconButton, TrashIconButtonProps } from "components";

export default {
  title: "Polaris/components/atoms/buttons/icon-buttons/TrashIconButton",
  component: TrashIconButton,
} as Meta<TrashIconButtonProps>;

const Template: Story<TrashIconButtonProps> = (args: TrashIconButtonProps) => (
  <TrashIconButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Red = Template.bind({});
Red.args = {
  variant: "red",
};
