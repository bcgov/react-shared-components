import React from "react";
import mdx from "./Dropdown.mdx";

import { Dropdown } from "./Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
  parameters: {
    docs: {
      page: mdx
    }
  }
};

const label = "My dropdown";
const itemsNoDefault = [
  "Select",
  "Option 1",
  "Option 2",
  "Option 3",
  "Option 4"
];
const itemsDefault = ["Option 1", "Option 2", "Option 3", "Option 4"];

export const NoPreSelectedOption = () => (
  <Dropdown label={label} items={itemsNoDefault} />
);

export const PreSelectedOption = () => (
  <Dropdown label={label} items={itemsDefault} />
);

export const Mobile = () => <Dropdown label={label} items={itemsNoDefault} />;

Mobile.story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile2"
    }
  }
};
