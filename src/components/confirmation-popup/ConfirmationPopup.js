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

export default function ConfirmationPopup({
  modal: { show, title, body },
  mainButton,
  confirmButton,
  cancelButton,
}) {
  return (
    <>
      {generateButton(
        mainButton.onClick,
        mainButton.label,
        mainButton.styling,
        "main-cancel-btn"
      )}

      <Modal show={show} onHide={cancelButton.onClick}>
        <Modal.Header className="hide-border mt-3" closeButton>
          <Modal.Title className="mx-auto larger-font">{title}</Modal.Title>
        </Modal.Header>
        <div className="mx-auto">
          <Modal.Body className="padding-left">{body()}</Modal.Body>
          <div className="mx-auto mb-5">
            {generateButton(
              confirmButton.styling,
              confirmButton.onClick,
              confirmButton.label,
              "modal-confirm-btn"
            )}
            <p />
            {generateButton(
              cancelButton.styling,
              cancelButton.onClick,
              cancelButton.label,
              "modal-cancel-btn"
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}

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
