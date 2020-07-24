import React from "react";
import { Dropdown } from "./Dropdown";
import testBasicSnapshot from "../../TestHelper";

describe("Dropdown Component", () => {
  const label = "My dropdown";
  const items = ["Option 1", "Option 2"];

  test("matches the snapshot", () => {
    testBasicSnapshot(<Dropdown label={label} items={items} />);
  });
});
