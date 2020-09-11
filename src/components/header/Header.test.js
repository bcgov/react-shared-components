import React from "react";
import { createMemoryHistory } from "history";
import { render, fireEvent, getAllByAltText } from "@testing-library/react";
import testBasicSnapshot from "../../TestHelper";
import { Header, HeadingTitle, HeaderImage } from "./Header";

const setHistoryAndClickHeader = (header, container, type) => {
  header.history.replace("/somepageroute");

  if (type === "click")
    fireEvent.click(getAllByAltText(container, "B.C. Government Logo")[0]);
  else if (type === "keydown")
    fireEvent.keyDown(getAllByAltText(container, "B.C. Government Logo")[0]);
};

describe("Header Component", () => {
  const header = {
    name: "File Submission",
    history: createMemoryHistory(),
  };

  const headerComponent = <Header header={header} />;
  const { container } = render(headerComponent);

  test("Header matches the snapshot", () => {
    testBasicSnapshot(headerComponent);
  });

  test("HeadingTitle matches the snapshot", () => {
    const headingTitle = HeadingTitle("navbar-brand pointer");

    testBasicSnapshot(headingTitle);
  });

  test("HeaderImage matches the snapshot", () => {
    const headingImage = HeaderImage(
      header.history,
      "img-fluid d-none d-md-block",
      181,
      "bcid-logo-rev-en.svg"
    );

    testBasicSnapshot(headingImage);
  });

  test("Clicking HeadingImage takes you back to home", () => {
    setHistoryAndClickHeader(header, container, "click");

    expect(header.history.location.pathname).toEqual("/");
  });

  test("Keydown on HeadingImage takes you back to home", () => {
    setHistoryAndClickHeader(header, container, "keydown");

    expect(header.history.location.pathname).toEqual("/");
  });
});
