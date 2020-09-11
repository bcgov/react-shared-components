import React from "react";
import { render, fireEvent, getByText, waitFor } from "@testing-library/react";
import testBasicSnapshot from "../../TestHelper";
import { getTestData } from "../../modules/termsOfUseTestData";

import { TermsOfUse } from "./TermsOfUse";

describe("TermsOfUse Component", () => {
  window.print = jest.fn();
  const acceptTerms = jest.fn();

  const content = getTestData();

  const heading = "Terms of Use";

  const confirmText = "I accept these terms and conditions";

  const termsOfUse = (
    <TermsOfUse
      acceptTerms={acceptTerms}
      content={content}
      heading={heading}
      confirmText={confirmText}
    />
  );

  test("Matches the snapshot", () => {
    testBasicSnapshot(termsOfUse);
  });

  test("Print terms of use (click)", async () => {
    const { container } = render(termsOfUse);

    fireEvent.click(getByText(container, "Print"));

    await waitFor(() => {
      expect(window.print).toHaveBeenCalled();
    });
  });

  test("Print terms of use (keydown)", async () => {
    const { container } = render(termsOfUse);

    fireEvent.keyDown(getByText(container, "Print"));

    await waitFor(() => {
      expect(window.print).toHaveBeenCalled();
    });
  });
});
