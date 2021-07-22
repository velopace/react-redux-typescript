import React from "react";
import { Story, Meta } from "@storybook/react";

import { TextNavInactive, TextNavInactiveProps } from "components";

export default {
  title: "Polaris/components/atoms/Text/TextNavInactive",
  component: TextNavInactive,
} as Meta<TextNavInactiveProps>;

const Template: Story<TextNavInactiveProps> = (args: TextNavInactiveProps) => (
  <TextNavInactive {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Navigation inactive",
};
