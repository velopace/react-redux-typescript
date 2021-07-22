import React from "react";
import { Story, Meta } from "@storybook/react";

import { AddButton, AddButtonProps } from "components";

export default {
  title: "Polaris/components/atoms/buttons/AddButton",
  component: AddButton,
} as Meta<AddButtonProps>;

const Template: Story<AddButtonProps> = (args: AddButtonProps) => (
  <AddButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Add measurement",
};
