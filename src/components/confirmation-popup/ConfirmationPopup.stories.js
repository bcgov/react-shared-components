import React from "react";
import useState from "storybook-addon-state";
// import mdx from "./ConfirmationPopup.mdx"; TODO: uncomment when jest is not upset with this anymore

import ConfirmationPopup from "./ConfirmationPopup";
import { getConfirmationPopupTestData } from "../../modules/confirmationPopupTestData";

export default {
  title: "Confirmation Popup",
  component: ConfirmationPopup,
  parameters: {
    docs: {
      // page: mdx, TODO: uncomment when jest is not upset with this anymore
    },
  },
};

const { body } = getConfirmationPopupTestData();

const modal = {
  title: "Cancel process?",
  body,
};

const mainButton = (onButtonClick) => ({
  label: "Click Me",
  styling: "bcgov-normal-white btn",
  onClick: onButtonClick,
});

const confirmButton = (onButtonClick) => ({
  label: "Yes, cancel my process please",
  styling: "bcgov-normal-blue btn bcgov-consistent-width",
  onClick: onButtonClick,
});

const cancelButton = (onButtonClick) => ({
  label: "No, resume my process please",
  styling: "bcgov-normal-white btn bcgov-consistent-width",
  onClick: onButtonClick,
});

const ConfirmationPopupState = () => {
  const [show, setShow] = useState(false);
  const onButtonClick = () => setShow(!show);

  return (
    <ConfirmationPopup
      key="popup"
      modal={{ ...modal, show }}
      mainButton={mainButton(onButtonClick)}
      confirmButton={confirmButton(onButtonClick)}
      cancelButton={cancelButton(onButtonClick)}
    />
  );
};

export const Default = ConfirmationPopupState.bind({});

export const Mobile = ConfirmationPopupState.bind({});

Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile2",
  },
};
