import React from "react";

import testBasicSnapshot from "../../TestHelper";
import { DatePick } from "./DatePick";

describe("DatePick Component", () => {
  const selectedDate = new Date("August 19, 1975 23:15:30");
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
