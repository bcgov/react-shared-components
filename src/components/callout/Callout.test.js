import React from "react";
import { Callout } from "./Callout";
import testBasicSnapshot from "../../TestHelper";

describe("Callout Component", () => {
  const text = "some text";
  const agreeCallout = jest.fn();

  test("with text matches the snapshot", () => {
    testBasicSnapshot(<Callout text={text} />);
  });

  test("with checkbox matches the snapshot", () => {
    testBasicSnapshot(
      <Callout
        text={text}
        agreeCallout={agreeCallout}
        checkboxLabel="I agree"
      />
    );
  });
});
