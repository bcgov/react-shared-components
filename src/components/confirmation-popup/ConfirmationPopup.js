/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import { Button } from "../button/Button";
import { propTypes } from "../../types/propTypes";

import "./ConfirmationPopup.css";

const generateButton = (onClick, label, styling, testId) => (
  <Button onClick={onClick} label={label} styling={styling} testId={testId} />
);

const ConfirmationPopup = ({
  modal: { show, title, body },
  mainButton,
  confirmButton,
  cancelButton,
}) => {
  return (
    <>
      {generateButton(
        mainButton.onClick,
        mainButton.label,
        mainButton.styling,
        "main-cancel-btn"
      )}

      <Modal show={show} onHide={cancelButton.onClick}>
        <Modal.Header className="bcgov-hide-border mt-3" closeButton>
          <Modal.Title className="mx-auto bcgov-larger-font">
            {title}
          </Modal.Title>
        </Modal.Header>
        <div className="mx-auto">
          <Modal.Body className="bcgov-padding-left">{body()}</Modal.Body>
          <div className="mx-auto mb-5">
            {generateButton(
              confirmButton.onClick,
              confirmButton.label,
              confirmButton.styling,
              "modal-confirm-btn"
            )}
            <p />
            {generateButton(
              cancelButton.onClick,
              cancelButton.label,
              cancelButton.styling,
              "modal-cancel-btn"
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ConfirmationPopup;

ConfirmationPopup.propTypes = {
  modal: PropTypes.shape({
    show: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.func.isRequired,
  }).isRequired,
  mainButton: propTypes.button,
  confirmButton: propTypes.button,
  cancelButton: propTypes.button,
};
