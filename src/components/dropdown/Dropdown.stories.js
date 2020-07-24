import React from "react";
import { action } from "@storybook/addon-actions";
import mdx from "./Dropdown.mdx";

import { Dropdown } from "./Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const onSelect = () => action("dropdown option selected");
const label = "My dropdown";
const itemsNoDefault = [
  "Select",
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4",
];
const itemsDefault = ["Option 1", "Option 2", "Option 3", "Option 4"];

export const NoPreSelectedOption = () => (
  <Dropdown label={label} items={itemsNoDefault} onSelect={onSelect} />
);

export const PreSelectedOption = () => (
  <Dropdown label={label} items={itemsDefault} onSelect={onSelect} />
);

export const Mobile = () => (
  <Dropdown label={label} items={itemsNoDefault} onSelect={onSelect} />
);

Mobile.story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile2",
    },
  },
};
