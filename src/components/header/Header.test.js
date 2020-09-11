import React from "react";
import { createMemoryHistory } from "history";
import { render, fireEvent, getAllByAltText } from "@testing-library/react";
import testBasicSnapshot from "../../TestHelper";
import { Header, HeadingTitle, HeaderImage } from "./Header";

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
    header.history.replace("/somepageroute");

    fireEvent.click(getAllByAltText(container, "B.C. Government Logo")[0]);

    expect(header.history.location.pathname).toEqual("/");
  });

  test("Keydown on HeadingImage takes you back to home", () => {
    header.history.replace("/somepageroute");

    fireEvent.keyDown(getAllByAltText(container, "B.C. Government Logo")[0]);

    expect(header.history.location.pathname).toEqual("/");
  });
});
