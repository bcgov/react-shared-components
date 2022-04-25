import React from "react";
import { action } from "@storybook/addon-actions";
// import mdx from "./Input.mdx"; TODO: uncomment when jest is not upset with this anymore

import { Input } from "./Input";

const input = {
  label: "Label Heading",
  id: "textInputId",
  placeholder: "Enter value",
  isReadOnly: false,
  isRequired: false,
};

export default {
  title: "Input",
  component: Input,
  parameters: {
    docs: {
      // page: mdx, TODO: uncomment when jest is not upset with this anymore
    },
  },
};

export const EditableWhiteMandatory = () => (
  <Input
    input={{
      ...input,
      styling: "bcgov-editable-white",
      isRequired: true,
    }}
    onChange={action("onChange")}
  />
);

export const EditableWhiteWithLabel = () => (
  <Input
    input={{
      ...input,
      styling: "bcgov-editable-white",
    }}
    onChange={action("onChange")}
  />
);

export const EditableWhiteNoLabel = () => (
  <Input
    input={{
      ...input,
      styling: "bcgov-editable-white",
      label: "",
    }}
    onChange={action("onChange")}
  />
);

export const NonEditableGrey = () => (
  <Input
    input={{
      ...input,
      styling: "bcgov-non-editable-grey",
      isReadOnly: true,
    }}
    onChange={action("onChange")}
  />
);

export const WithErrorMessage = () => (
  <Input
    input={{
      ...input,
      styling: "bcgov-editable-white",
      errorMsg: "There is an error.",
      value: "some wrong value",
    }}
    onChange={action("onChange")}
  />
);

export const Mobile = () => (
  <Input
    input={{
      ...input,
      styling: "bcgov-non-editable-grey",
      isReadOnly: true,
    }}
    onChange={action("onChange")}
  />
);

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile2",
  },
};
