import React from "react";
import { action } from "@storybook/addon-actions";
// import mdx from "./Callout.mdx"; TODO: uncomment when jest is not upset with this anymore

import { Callout } from "./Callout";

export default {
  title: "Callout",
  component: Callout,
  parameters: {
    docs: {
      // page: mdx, TODO: uncomment when jest is not upset with this anymore
    },
  },
};

const text =
  "By March 1, 2018, eligible residents of B.C. are expected to renew enrolment in the Medical Services Plan (MSP) and get a BC Services Card.";

export const WithText = () => <Callout text={text} />;

export const WithCheckbox = () => (
  <Callout
    text={text}
    checkboxLabel="I agree"
    agreeCallout={action("onAgreeCallout")}
  />
);

export const Mobile = () => <Callout text={text} />;

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile2",
  },
};
