import React from "react";
import { Story, Meta } from "@storybook/react";

import { Card, CardProps } from "components";

export default {
  title: "Polaris/components/atoms/Card",
  component: Card,
} as Meta<CardProps>;

const Template: Story<CardProps> = (args: CardProps) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {};
