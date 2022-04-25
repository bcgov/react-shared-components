import React from "react";
// import mdx from "./Footer.mdx"; TODO: uncomment when jest is not upset with this anymore

import { Footer } from "./Footer";

export default {
  title: "Footer",
  component: Footer,
  parameters: {
    docs: {
      // page: mdx, TODO: uncomment when jest is not upset with this anymore
    },
  },
};

export const Basic = () => <Footer />;

export const Mobile = () => <Footer />;

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile2",
  },
};
