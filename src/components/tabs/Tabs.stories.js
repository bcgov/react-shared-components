import React from "react";
import mdx from "./Tabs.mdx";
import { tabs } from "../../modules/tabsTestData";

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

export const BCGovTabs = () => <Tabs tabs={tabs} height={300} />;
