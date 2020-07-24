import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import { Dropdown } from "./Dropdown";
import testBasicSnapshot from "../../TestHelper";

describe("Dropdown Component", () => {
  const label = "My dropdown";
  const items = ["Option 1", "Option 2"];
  const onSelect = jest.fn();

  test("matches the snapshot", () => {
    testBasicSnapshot(
      <Dropdown onSelect={onSelect} label={label} items={items} />
    );
  });

  test("on change updates the selected value", () => {
    const { container } = render(
      <Dropdown onSelect={onSelect} label={label} items={items} />
    );

    fireEvent.change(getByTestId(container, "dropdown"), {
      target: { value: "Option 2" }
    });

    expect(onSelect).toHaveBeenCalledWith("Option 2");
  });
});
