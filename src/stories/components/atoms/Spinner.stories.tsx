import React from "react";
import { Story, Meta } from "@storybook/react";

import { Spinner, SpinnerProps } from "components";

export default {
  title: "Polaris/components/atoms/Spinner",
  component: Spinner,
} as Meta<SpinnerProps>;

const Template: Story<SpinnerProps> = (args: SpinnerProps) => (
  <Spinner {...args} />
);

export const Default = Template.bind({});
Default.args = {};
