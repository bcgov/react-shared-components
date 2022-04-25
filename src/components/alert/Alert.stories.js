import React from "react";
import { MdError, MdCancel, MdCheckBox, MdInfo } from "react-icons/md";
// import mdx from "./Alert.mdx"; TODO: uncomment when jest is not upset with this anymore

import { Alert } from "./Alert";
import { generateAlert } from "../../modules/alertTestData";

export default {
  title: "Alert",
  component: Alert,
  parameters: {
    docs: {
      // page: mdx, TODO: uncomment when jest is not upset with this anymore
    },
  },
};

export const Success = () =>
  generateAlert(
    <MdCheckBox size={32} />,
    "success",
    "bcgov-success-background",
    "This is a success message!"
  );

export const Warning = () =>
  generateAlert(
    <MdError size={32} />,
    "warning",
    "bcgov-warning-background",
    "This is a warning message!"
  );

export const Error = () =>
  generateAlert(
    <MdCancel size={32} />,
    "error",
    "bcgov-error-background",
    "This is an error message!"
  );

export const Info = () =>
  generateAlert(
    <MdInfo size={32} />,
    "info",
    "bcgov-info-background",
    "This is an info message!"
  );

export const Mobile = () =>
  generateAlert(
    <MdCheckBox size={32} />,
    "success",
    "bcgov-success-background",
    "This is a success message!"
  );

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile2",
  },
};
