import React from "react";
import { Story, Meta } from "@storybook/react";

import { Divider, DividerProps } from "components";

export default {
  title: "Polaris/components/atoms/Divider",
  component: Divider,
} as Meta<DividerProps>;

const Template: Story<DividerProps> = (args: DividerProps) => (
  <Divider {...args} />
);

export const DefaultDivider = Template.bind({});
DefaultDivider.args = {};
