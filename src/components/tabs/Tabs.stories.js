import React from "react";
// import mdx from "./Tabs.mdx"; TODO: uncomment when jest is not upset with this anymore
import { tabs } from "../../modules/tabsTestData";

import { Tabs } from "./Tabs";

export default {
  title: "Tabs",
  component: Tabs,
  parameters: {
    docs: {
      // page: mdx, TODO: uncomment when jest is not upset with this anymore
    },
  },
};

export const BCGovTabs = () => <Tabs tabs={tabs} height={300} />;
