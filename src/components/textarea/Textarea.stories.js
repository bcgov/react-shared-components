import React from "react";
import { action } from "@storybook/addon-actions";
// import mdx from "./Textarea.mdx"; TODO: uncomment when jest is not upset with this anymore

import { Textarea } from "./Textarea";

export default {
  title: "Textarea",
  component: Textarea,
  parameters: {
    docs: {
      // page: mdx, TODO: uncomment when jest is not upset with this anymore
    },
  },
};

export const WithLabel = () => (
  <Textarea
    onChange={action("onChange")}
    label="Can you provide more detail?"
    id="1"
  />
);

export const WithoutLabel = () => (
  <Textarea onChange={action("onChange")} id="1" />
);

export const Mobile = () => (
  <Textarea
    onChange={action("onChange")}
    label="Can you provide more detail?"
    id="1"
  />
);

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile2",
  },
};
