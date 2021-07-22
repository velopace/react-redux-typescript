import React from "react";
import { Story, Meta } from "@storybook/react";

import { EditIconButton, EditIconButtonProps } from "components";

export default {
  title: "Polaris/components/atoms/buttons/icon-buttons/EditIconButton",
  component: EditIconButton,
} as Meta<EditIconButtonProps>;

const Template: Story<EditIconButtonProps> = (args: EditIconButtonProps) => (
  <EditIconButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
};

export const Dark = Template.bind({});
Dark.args = {
  variant: "dark",
};
