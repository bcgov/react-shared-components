import React from "react";
// import mdx from "./Loader.mdx"; TODO: uncomment when jest is not upset with this anymore

import { Loader } from "./Loader";

export default {
  title: "Loader",
  component: Loader,
  parameters: {
    docs: {
      // page: mdx, TODO: uncomment when jest is not upset with this anymore
    },
  },
};

export const Page = () => <Loader page />;

export const Container = () => (
  <div style={{ background: "rgba(225, 232, 242, 1)", width: "200px" }}>
    <Loader />
  </div>
);

export const Mobile = () => <Loader page />;

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile2",
  },
};
