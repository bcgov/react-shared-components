import React from "react";
import testBasicSnapshot from "../../TestHelper";
import { Sidecard } from "./Sidecard";

describe("Sidecard Component", () => {
  const sideCard = {
    heading: "header",
    content: ["content"],
    type: "grey",
    id: "greycard",
  };

  test("Matches the grey card snapshot", () => {
    testBasicSnapshot(<Sidecard sideCard={sideCard} />);
  });

  test("Matches the blue card snapshot without image", () => {
    testBasicSnapshot(
      <Sidecard sideCard={{ ...sideCard, type: "blue", id: "bluecard" }} />
    );
  });

  test("Matches the blue card snapshot with image", () => {
    testBasicSnapshot(
      <Sidecard
        sideCard={{
          ...sideCard,
          type: "blue",
          id: "blueimagecard",
          image: "image",
          imageLink: "imageLink",
        }}
      />
    );
  });

  test("Matches the bluegrey card snapshot", () => {
    testBasicSnapshot(
      <Sidecard
        sideCard={{ ...sideCard, type: "bluegrey", id: "bluegreycard" }}
      />
    );
  });

  test("Matches the snapshot when it is wide", () => {
    testBasicSnapshot(
      <Sidecard sideCard={{ ...sideCard, isWide: true, id: "widecard" }} />
    );
  });

  test("Matches the snapshot when heading is long", () => {
    testBasicSnapshot(
      <Sidecard
        sideCard={{
          ...sideCard,
          id: "longheadingcard",
          heading:
            "heading is quite long so we can use custom styling to see it render",
        }}
      />
    );
  });
});
