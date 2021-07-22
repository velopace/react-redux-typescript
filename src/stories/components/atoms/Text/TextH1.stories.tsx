import React from "react";
import { Story, Meta } from "@storybook/react";

import { TextH1, TextH1Props } from "components";

export default {
  title: "Polaris/components/atoms/Text/TextH1",
  component: TextH1,
} as Meta<TextH1Props>;

const Template: Story<TextH1Props> = (args: TextH1Props) => (
  <TextH1 {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Header 1",
};
