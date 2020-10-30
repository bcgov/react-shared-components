import React from "react";
import { action } from "@storybook/addon-actions";
import { createMemoryHistory } from "history";
import { Button } from "../button/Button";
import mdx from "./Header.mdx";

import { Header } from "./Header";

export default {
  title: "Header",
  component: Header,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const history = createMemoryHistory({
  initialEntries: [{ key: "testKey" }],
});

const header = {
  name: "Header title",
  history,
};

const headerWithButtonAndText = {
  ...header,
  button: () => (
    <Button
      label="Login"
      styling="bcgov-normal-white btn"
      onClick={action("button was clicked")}
    />
  ),
  additionalText: "Username",
};

export const Basic = () => <Header header={header} />;

export const WithButtonAndText = () => (
  <Header header={headerWithButtonAndText} />
);

export const Mobile = () => <Header header={header} />;

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile2",
  },
};
