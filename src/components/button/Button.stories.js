import React from "react";
import { action } from "@storybook/addon-actions";
// import mdx from "./Button.mdx"; TODO: uncomment when jest is not upset with this anymore

import { Button } from "./Button";
import "./Button.css";

export default {
  title: "Button",
  component: Button,
  parameters: {
    docs: {
      // page: mdx, TODO: uncomment when jest is not upset with this anymore
    },
  },
};

const onClick = () => action("button was clicked");

export const Primary = () => (
  <Button onClick={onClick} label="Submit" styling="bcgov-normal-blue btn" />
);

export const Secondary = () => (
  <Button onClick={onClick} label="Cancel" styling="bcgov-normal-white btn" />
);

export const Disabled = () => (
  <Button
    onClick={onClick}
    label="Disabled"
    styling="bcgov-normal-blue btn"
    disabled
  />
);

export const HasLoader = () => (
  <Button
    onClick={onClick}
    label="Has Loader"
    styling="bcgov-normal-blue btn"
    hasLoader
  />
);

export const Mobile = () => (
  <Button onClick={onClick} label="Submit" styling="bcgov-normal-blue btn" />
);

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile2",
  },
};
