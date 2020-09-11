import React from "react";
import { MdPerson } from "react-icons/md";

import testBasicSnapshot from "../../TestHelper";
import { DisplayBox } from "./DisplayBox";
import { getTestTable } from "../../modules/displayBoxTestData";

const table = getTestTable();
const icon = <MdPerson size={32} />;

const generateDisplayBox = (hasIcon, styling) => {
  if (!hasIcon) return <DisplayBox element={table} />;
  else return <DisplayBox icon={icon} element={table} styling={styling} />;
};

describe("DisplayBox Component", () => {
  test("Matches the 'without icon' snapshot", () => {
    testBasicSnapshot(generateDisplayBox(false));
  });

  test("Matches the 'with icon' snapshot", () => {
    testBasicSnapshot(generateDisplayBox(true));
  });

  test("Matches the warning snapshot", () => {
    testBasicSnapshot(generateDisplayBox(true, "warning-background"));
  });

  test("Matches the blue-background snapshot", () => {
    testBasicSnapshot(generateDisplayBox(true, "blue-background"));
  });
});
