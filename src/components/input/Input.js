/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

export const Input = ({
  input: {
    label,
    id,
    value,
    placeholder,
    isRequired,
    errorMsg,
    styling,
    note,
    isReadOnly,
  },
  onChange,
}) => {
  let asterisk = "";

  if (isRequired) {
    asterisk = (
      <span id="asterisk" className="bcgov-mandatory">
        *
      </span>
    );
  }

  let labelPart = null;
  const labelPartExists = label !== false;

  if (label) {
    labelPart = (
      <label htmlFor={id} className="bcgov-label">
        <div className="bcgov-input-label">{label}</div>
        {asterisk}&nbsp;
        <span className="bcgov-note">{note}</span>
      </label>
    );
  }

  return (
    <div>
      {labelPartExists && labelPart}
      <input
        className={styling}
        type="text"
        id={id}
        defaultValue={value}
        placeholder={placeholder}
        readOnly={isReadOnly}
        onChange={(event) => onChange(event.target.value)}
      />
      <br />
      <span className="bcgov-error">{errorMsg}</span>
    </div>
  );
};

Input.propTypes = {
  input: PropTypes.shape({
    label: PropTypes.string,
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    isRequired: PropTypes.bool.isRequired,
    errorMsg: PropTypes.string,
    styling: PropTypes.string.isRequired,
    note: PropTypes.string,
    isReadOnly: PropTypes.bool,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};
