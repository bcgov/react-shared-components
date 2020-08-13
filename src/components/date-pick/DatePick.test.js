import React from "react";

import testBasicSnapshot from "../../TestHelper";
import { DatePick } from "./DatePick";

describe("DatePick Component", () => {
  const selectedDate = new Date();
  const setSelectedDate = jest.fn();

  test("Matches the snapshot", () => {
    testBasicSnapshot(
      <DatePick selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    );
  });

  test("With mandatory label matches the snapshot", () => {
    testBasicSnapshot(
      <DatePick
        isRequired
        label="Select date"
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    );
  });
});
