import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "components";

export default {
  title: "Polaris/components/atoms/buttons/Button",
  component: Button,
  decorators: [
    (MyStory) => (
      <div style={{ display: "flex" }}>
        <MyStory />
      </div>
    ),
  ],
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Default Button",
};

export const Large = Template.bind({});
Large.args = {
  large: true,
  children: "Large Button",
};

export const Tiny = Template.bind({});
Tiny.args = {
  tiny: true,
  children: "Tiny Button",
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: "Primary Button",
};

export const Destructive = Template.bind({});
Destructive.args = {
  destructive: true,
  children: "Destructive Button",
};
