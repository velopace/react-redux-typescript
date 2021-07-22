import React from "react";
import { Story, Meta } from "@storybook/react";

import { TextSmall, TextSmallProps } from "components";

export default {
  title: "Polaris/components/atoms/Text/TextSmall",
  component: TextSmall,
} as Meta<TextSmallProps>;

const Template: Story<TextSmallProps> = (args: TextSmallProps) => (
  <TextSmall {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Small",
};
