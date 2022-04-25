import React from "react";
import { FaIdCard } from "react-icons/fa";
import mdx from "./Sidecard.mdx";

import { Sidecard } from "./Sidecard";

export default {
  title: "Sidecard",
  component: Sidecard,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const sideCard = {
  heading: "Heading",
  content: ["This is where I put my content for the sidecard"],
  type: "blue",
  id: "bluecard",
};

export const Blue = () => <Sidecard sideCard={sideCard} />;

export const Grey = () => (
  <Sidecard sideCard={{ ...sideCard, type: "grey", id: "greycard" }} />
);

export const BlueGrey = () => (
  <Sidecard sideCard={{ ...sideCard, type: "bluegrey", id: "bluegreycard" }} />
);

export const WithIcon = () => (
  <Sidecard
    sideCard={{
      ...sideCard,
      type: "bluegrey",
      id: "bluegreyiconcard",
      icon: <FaIdCard className="bcgov-side-card-icon" />,
    }}
  />
);

export const Mobile = () => (
  <Sidecard
    sideCard={{
      ...sideCard,
      type: "bluegrey",
      id: "bluegreycard",
      icon: <FaIdCard className="bcgov-side-card-icon" />,
    }}
  />
);

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile2",
  },
};
