/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

const body = () => (
  <>
    <p>Your files will not be submitted.</p>
    <p>
      You will be returned to:
      <br />
      <b>Original</b> website
    </p>
  </>
);

export function getConfirmationPopupTestData() {
  return { body };
}
