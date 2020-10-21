import React from "react";
import PropTypes from "prop-types";

import "./DisplayBox.css";

export const DisplayBox = ({ styling, icon, element }) => {
  return (
    <div className={`bcgov-display-box ${styling}`}>
      {icon && <div className="bcgov-display-icon">{icon}</div>}
      <div className="bcgov-display-right-element">{element}</div>
    </div>
  );
};

DisplayBox.propTypes = {
  styling: PropTypes.string,
  icon: PropTypes.element,
  element: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
};

DisplayBox.defaultProps = {
  styling: "",
  icon: null,
};
