import React from "react";
import { Story, Meta } from "@storybook/react";

import { TextNumerals, TextNumeralsProps } from "components";

export default {
  title: "Polaris/components/atoms/Text/TextNumerals",
  component: TextNumerals,
} as Meta<TextNumeralsProps>;

const Template: Story<TextNumeralsProps> = (args: TextNumeralsProps) => (
  <TextNumerals {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "120,000 11:39 6/14",
};
