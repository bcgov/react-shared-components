import React from "react";
import PropTypes from "prop-types";

import "./Radio.css";

export const Radio = ({ id, name, label, onSelect }) => {
  return (
    <label className="bcgov-radio" htmlFor={id}>
      {label}
      <input
        type="radio"
        name={name}
        id={id}
        onChange={(e) => onSelect(e.target.id)}
      />
      <span className="bcgov-dot" />
    </label>
  );
};

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
};

Radio.defaultProps = {
  onSelect: () => {},
};
