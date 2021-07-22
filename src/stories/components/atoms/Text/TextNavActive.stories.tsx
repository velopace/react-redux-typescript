import React from "react";
import { Story, Meta } from "@storybook/react";

import { TextNavActive, TextNavActiveProps } from "components";

export default {
  title: "Polaris/components/atoms/Text/TextNavActive",
  component: TextNavActive,
} as Meta<TextNavActiveProps>;

const Template: Story<TextNavActiveProps> = (args: TextNavActiveProps) => (
  <TextNavActive {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Navigation active",
};
