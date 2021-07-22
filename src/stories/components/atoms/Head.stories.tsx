import React from "react";
import { Story, Meta } from "@storybook/react";

import { Head, HeadProps } from "components";

export default {
  title: "Polaris/components/atoms/Head",
  component: Head,
} as Meta<HeadProps>;

const Template: Story<HeadProps> = (args: HeadProps) => <Head {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default Head",
};

export const Large = Template.bind({});
Large.args = {
  large: true,
  children: "Large Head",
};

export const Small = Template.bind({});
Small.args = {
  small: true,
  children: "Small Head",
};

export const Tiny = Template.bind({});
Tiny.args = {
  tiny: true,
  children: "Tiny Head",
};
