// import { Title } from "@storybook/blocks";
import React from "react";
import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;
// export const Red=()=><Button label="press me" backgroundColor="red" />

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  size: "medium",
  color: "red",
  children: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  size: "medium",
  color: "green",
  children: "Secondary Button",
};

export const Text = Template.bind({});
Text.args = {
  variant: "text",
  size: "medium",
  color: "blue",
  children: "Text Button",
};
export const Primary1 = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'medium',
  color: 'red',
  children: 'Primary Button - Updated',
};
