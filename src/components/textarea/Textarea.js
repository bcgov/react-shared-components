import React from "react";
import PropTypes from "prop-types";

import "./Textarea.css";

export const Textarea = ({ id, isRequired, label, onChange }) => {
  let asterisk = "";

  if (isRequired) {
    asterisk = (
      <span id="asterisk" className="mandatory">
        *
      </span>
    );
  }

  return (
    <>
      {label && (
        <div className="text-label">
          <label htmlFor={id}>{label}</label>
          {asterisk}&nbsp;
        </div>
      )}
      <textarea
        id={id}
        className="text-input"
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
