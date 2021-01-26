import React from "react";
import mdx from "./Tabs.mdx";

import { Tabs } from "./Tabs";

export default {
  title: "Tabs",
  component: Tabs,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const tabs = [
  {
    title: "Tab1",
    content: <p> Tab1 Content... </p>,
  },
  {
    title: "Tab2",
    content: <p> Tab2 Content... </p>,
  },
  {
    title: "Tab3",
    content: <p> Tab3 Content... </p>,
    isDisabled: true,
  },
];

export const BCGovTabs = () => <Tabs tabs={tabs} height={300} />;
