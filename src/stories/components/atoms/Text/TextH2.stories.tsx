import React from "react";
import { Story, Meta } from "@storybook/react";

import { TextH2, TextH2Props } from "components";

export default {
  title: "Polaris/components/atoms/Text/TextH2",
  component: TextH2,
} as Meta<TextH2Props>;

const Template: Story<TextH2Props> = (args: TextH2Props) => (
  <TextH2 {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Header 2",
};
