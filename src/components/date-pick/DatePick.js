/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import { MdDateRange } from "react-icons/md";

import "./DatePick.css";
import "react-datepicker/dist/react-datepicker.css";

export const DatePick = ({
  isRequired,
  label,
  selectedDate,
  setSelectedDate,
}) => {
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
        <div className="input-label">
          <label htmlFor={label}>{label}</label>
          {asterisk}&nbsp;
        </div>
      )}
      <div className="bcgov-flex">
        <MdDateRange size={32} className="bcgov-move-right" />
        <DatePicker selected={selectedDate} onChange={setSelectedDate} />
      </div>
    </>
  );
};

DatePick.propTypes = {
  isRequired: PropTypes.bool,
  label: PropTypes.string,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};

DatePick.defaultProps = {
  label: "",
  isRequired: false,
};
