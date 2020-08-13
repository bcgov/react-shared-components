import React from "react";
import { action } from "@storybook/addon-actions";
import mdx from "./Radio.mdx";

import { Radio } from "./Radio";

export default {
  title: "Radio",
  component: Radio,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const label = "Yes";
const onSelect = () => action("radio selected");

export const Default = () => (
  <Radio id="yes" name="yes" label={label} onSelect={onSelect} />
);

export const Mobile = () => (
  <Radio id="yes" name="yes" label={label} onSelect={onSelect} />
);

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile2",
  },
};
