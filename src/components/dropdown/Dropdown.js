import React from "react";
import PropTypes from "prop-types";
import { FaChevronDown } from "react-icons/fa";

import "./Dropdown.css";

export const Dropdown = ({ items, label, onSelect, testId }) => {
  return (
    <div className="bcgov-form">
      {label && (
        <label className="bcgov-dropdown-label" htmlFor="dropdown">
          {label}
        </label>
      )}
      <div className="bcgov-dropdown-wrapper">
        <FaChevronDown className="fa-chevron-down" />
        <select
          className="bcgov-dropdown"
          name="options"
          id="dropdown"
          data-testid={testId}
          onChange={(e) => onSelect(e.target.value)}
        >
          {items.map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  testId: PropTypes.string,
};

Dropdown.defaultProps = {
  label: "",
  testId: "dropdown",
};
