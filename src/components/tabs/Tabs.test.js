import React from "react";

import testBasicSnapshot from "../../TestHelper";
import { Tabs } from "./Tabs";

const tabs = [
  {
    title: "Tab1",
    content: <p> Tab Content... </p>,
  },
  {
    title: "Tab2",
    content: <p> Tab Content... </p>,
  },
  {
    title: "Tab3",
    content: <p> Tab Content... </p>,
    isDisabled: true,
  },
];

describe("Tabs Component", () => {
  test("Matches the snapshot", () => {
    testBasicSnapshot(<Tabs tabs={tabs} height={300} />);
  });
});
