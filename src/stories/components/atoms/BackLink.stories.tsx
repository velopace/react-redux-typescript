import React from "react";
import { Story, Meta } from "@storybook/react";

import { BackLink, BackLinkProps } from "components";

export default {
  title: "Polaris/components/atoms/BackLink",
  component: BackLink,
} as Meta<BackLinkProps>;

const Template: Story<BackLinkProps> = (args: BackLinkProps) => (
  <BackLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Back to Page",
};
