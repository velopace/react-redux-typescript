import React from "react";
import { Story, Meta } from "@storybook/react";

import { TextButton, TextButtonProps } from "components";

export default {
  title: "Polaris/components/atoms/Text/TextButton",
  component: TextButton,
} as Meta<TextButtonProps>;

const Template: Story<TextButtonProps> = (args: TextButtonProps) => (
  <TextButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};
