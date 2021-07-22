import React from "react";
import { Story, Meta } from "@storybook/react";

import { TextBody, TextBodyProps } from "components";

export default {
  title: "Polaris/components/atoms/Text/TextBody",
  component: TextBody,
} as Meta<TextBodyProps>;

const Template: Story<TextBodyProps> = (args: TextBodyProps) => (
  <TextBody {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.",
};
