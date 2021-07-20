import React from "react";
import PropTypes from "prop-types";

import "./Radio.css";

export const Radio = ({ id, name, label, onSelect, checked }) => {
  return (
    <label className="bcgov-radio" htmlFor={id}>
      {label}
      <input
        type="radio"
        name={name}
        id={id}
        checked={checked}
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
  checked: PropTypes.bool,
};

Radio.defaultProps = {
  onSelect: () => {},
  checked: false,
};
