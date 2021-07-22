import React from "react";
import { Story, Meta } from "@storybook/react";

import { TextSubtitle, TextSubtitleProps } from "components";

export default {
  title: "Polaris/components/atoms/Text/TextSubtitle",
  component: TextSubtitle,
} as Meta<TextSubtitleProps>;

const Template: Story<TextSubtitleProps> = (args: TextSubtitleProps) => (
  <TextSubtitle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Subtitle",
};
