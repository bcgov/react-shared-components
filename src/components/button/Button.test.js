import React from "react";
import testBasicSnapshot from "../../TestHelper";

import { Button } from "./Button";

describe("Button Component", () => {
  const onClick = jest.fn();
  const label = "Button label";
  const buttonComponent = (styling, disabled, hasLoader) => (
    <Button
      onClick={onClick}
      label={label}
      styling={styling}
      disabled={disabled}
      hasLoader={hasLoader}
    />
  );

  test("Matches the 'primary' snapshot", () => {
    testBasicSnapshot(buttonComponent("normal-blue btn"));
  });

  test("Matches the 'secondary' snapshot", () => {
    testBasicSnapshot(buttonComponent("normal-white btn"));
  });

  test("Matches the 'disabled' snapshot", () => {
    testBasicSnapshot(buttonComponent("normal-blue btn", true));
  });

  test("Matches the 'hasLoader' snapshot", () => {
    testBasicSnapshot(buttonComponent("normal-blue btn", false, true));
  });
});
