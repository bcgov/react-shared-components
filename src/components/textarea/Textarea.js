/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import PropTypes from "prop-types";

import "./Textarea.css";

export const Textarea = ({ id, isRequired, label, onChange }) => {
  let asterisk = "";

  if (isRequired) {
    asterisk = (
      <span id="asterisk" className="bcgov-mandatory">
        *
      </span>
    );
  }

  return (
    <>
      {label && (
        <div className="bcgov-input-label">
          <label htmlFor={id}>{label}</label>
          {asterisk}&nbsp;
        </div>
      )}
      <textarea
        id={id}
        className="bcgov-text-input"
        rows="8"
        cols="60"
        onChange={(event) => onChange(event.target.value)}
      />
    </>
  );
};

Textarea.propTypes = {
  isRequired: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Textarea.defaultProps = {
  label: "",
  isRequired: false,
};
