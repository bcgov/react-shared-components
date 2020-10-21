import React from "react";
import PropTypes from "prop-types";

import "./Callout.css";

export const Callout = ({ text, checkboxLabel, agreeCallout }) => {
  const styling = !checkboxLabel ? "bcgov-callout" : "bcgov-callout-checkbox";

  return (
    <div className={styling}>
      <p>{text}</p>
      {checkboxLabel && (
        <label style={{ float: "right" }} htmlFor="agreeCallout">
          <input id="agreeCallout" type="checkbox" onClick={agreeCallout} />
          &nbsp;
          <b>{checkboxLabel}</b>
          <span id="asterisk" className="bcgov-mandatory">
            *
          </span>
        </label>
      )}
    </div>
  );
};

Callout.propTypes = {
  text: PropTypes.string.isRequired,
  agreeCallout: PropTypes.func,
  checkboxLabel: PropTypes.string,
};

Callout.defaultProps = {
  agreeCallout: () => {},
  checkboxLabel: "",
};
