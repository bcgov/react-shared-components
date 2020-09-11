import React from "react";
import { MdError, MdCancel, MdCheckBox, MdInfo } from "react-icons/md";

import testBasicSnapshot from "../../TestHelper";
import { generateAlert } from "../../modules/alertTestData";

describe("Alert Component", () => {
  test("Matches the 'success' snapshot", () => {
    testBasicSnapshot(
      generateAlert(
        <MdCheckBox size={32} />,
        "success",
        "success-background",
        "This is a success message!"
      )
    );
  });

  test("Matches the 'warning' snapshot", () => {
    testBasicSnapshot(
      generateAlert(
        <MdError size={32} />,
        "warning",
        "warning-background",
        "This is a warning message!"
      )
    );
  });

  test("Matches the 'error' snapshot", () => {
    testBasicSnapshot(
      generateAlert(
        <MdCancel size={32} />,
        "error",
        "error-background",
        "This is an error message!"
      )
    );
  });

  test("Matches the 'info' snapshot", () => {
    testBasicSnapshot(
      generateAlert(
        <MdInfo size={32} />,
        "info",
        "info-background",
        "This is an info message!"
      )
    );
  });
});
