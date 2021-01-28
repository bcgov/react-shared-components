import React from "react";

import testBasicSnapshot from "../../TestHelper";
import { Tabs } from "./Tabs";
import { tabs } from "../../modules/tabsTestData";

function testTabs() {
  testBasicSnapshot(<Tabs tabs={tabs} height={300} />);
}

describe("Tabs Component", () => {
  test("Matches the snapshot", () => {
    testTabs();
  });
});
