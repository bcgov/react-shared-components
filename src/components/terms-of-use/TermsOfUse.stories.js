import React from "react";
import { action } from "@storybook/addon-actions";
import { getTestData } from "../../modules/termsOfUseTestData";
import mdx from "./TermsOfUse.mdx";

import { TermsOfUse } from "./TermsOfUse";

export default {
  title: "Terms of Use",
  component: TermsOfUse,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const content = getTestData();

const heading = "Terms of Use";

const confirmText = "I accept these terms and conditions";

const termsOfUseComponent = (
  <TermsOfUse
    acceptTerms={action("accept terms of use")}
    content={content}
    heading={heading}
    confirmText={confirmText}
  />
);

export const Default = () => termsOfUseComponent;

export const Mobile = () => termsOfUseComponent;

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile2",
  },
};
