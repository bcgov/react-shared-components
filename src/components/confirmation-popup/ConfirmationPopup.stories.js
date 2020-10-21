/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { State, Store } from "@sambego/storybook-state";
import mdx from "./ConfirmationPopup.mdx";

import ConfirmationPopup from "./ConfirmationPopup";
import { getConfirmationPopupTestData } from "../../modules/confirmationPopupTestData";

export default {
  title: "Confirmation Popup",
  component: ConfirmationPopup,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const store = new Store({
  show: false,
});

const { body } = getConfirmationPopupTestData();

const modal = {
  title: "Cancel process?",
  body,
};

const onButtonClick = () => store.set({ show: !store.get("show") });

const mainButton = {
  label: "Click Me",
  styling: "bcgov-normal-white btn",
  onClick: onButtonClick,
};

const confirmButton = {
  label: "Yes, cancel my process please",
  styling: "bcgov-normal-blue btn bcgov-consistent-width",
  onClick: onButtonClick,
};

const cancelButton = {
  label: "No, resume my process please",
  styling: "bcgov-normal-white btn bcgov-consistent-width",
  onClick: onButtonClick,
};

const ConfirmationPopupState = (
  <State store={store}>
    {(state) => [
      <ConfirmationPopup
        key="popup"
        modal={{ ...modal, show: state.show }}
        mainButton={mainButton}
        confirmButton={confirmButton}
        cancelButton={cancelButton}
      />,
    ]}
  </State>
);

export const Default = () => ConfirmationPopupState;

export const Mobile = () => ConfirmationPopupState;

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile2",
  },
};
