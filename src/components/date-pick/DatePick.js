import React from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import { MdDateRange } from "react-icons/md";

import "./DatePick.css";
import "react-datepicker/dist/react-datepicker.css";

export const DatePick = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="bcgov-flex">
      <MdDateRange size={32} className="bcgov-move-right" />
      <DatePicker selected={selectedDate} onChange={setSelectedDate} />
    </div>
  );
};

DatePick.propTypes = {
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  setSelectedDate: PropTypes.func.isRequired,
};
