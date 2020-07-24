import React from "react";
import PropTypes from "prop-types";

import "./Table.css";

const TableElement = ({
  element: {
    name,
    value,
    isValueBold,
    isNameBold,
    isSideBySide,
    isEmptyRow,
    verticalMiddle = true,
    isClose,
  },
  isFeesData,
}) => {
  let columnWidth = "";
  if (verticalMiddle) {
    columnWidth = "bcgov-vertical-middle";
  } else if (isSideBySide) {
    columnWidth = "bcgov-side-by-side";
  }
  const emptyRow = isEmptyRow ? "bcgov-empty-row" : "";
  const rightAlign = isFeesData ? "bcgov-right-align" : "";
  const reduceWidth = isClose ? "bcgov-reduce-width" : "";

  return (
    <div className={`bcgov-row ${emptyRow}`}>
      {isNameBold && (
        <div className={`${columnWidth} ${reduceWidth}`}>
          <b>{name}</b>
        </div>
      )}
      {!isNameBold && (
        <div className={`${columnWidth} ${reduceWidth}`}>{name}</div>
      )}
      {isValueBold && (
        <div className={rightAlign}>
          <b>{value}</b>
        </div>
      )}
      {!isValueBold && <div>{value}</div>}
    </div>
  );
};

export const Table = ({ heading, elements, styling, isFeesData }) => {
  const tableComponents = elements.map((element) => {
    return (
      <TableElement
        isFeesData={isFeesData}
        key={element.key || element.name}
        element={element}
      />
    );
  });

  return (
    <div className={`bcgov-table ${styling}`}>
      <b>{heading}</b>
      <div className={"bcgov-table-body"}>{tableComponents}</div>
    </div>
  );
};

TableElement.propTypes = {
  element: PropTypes.shape({
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    isValueBold: PropTypes.bool,
    isNameBold: PropTypes.bool,
    isSideBySide: PropTypes.bool,
    isEmptyRow: PropTypes.bool,
    verticalMiddle: PropTypes.bool,
    isClose: PropTypes.bool,
  }).isRequired,
  isFeesData: PropTypes.bool.isRequired,
};

Table.propTypes = {
  heading: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
        .isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
        .isRequired,
      isValueBold: PropTypes.bool,
      isNameBold: PropTypes.bool,
      isSideBySide: PropTypes.bool,
      isEmptyRow: PropTypes.bool,
      verticalMiddle: PropTypes.bool,
      isClose: PropTypes.bool,
    }).isRequired
  ),
  styling: PropTypes.string,
  isFeesData: PropTypes.bool,
};

Table.defaultProps = {
  styling: "",
  heading: "",
  elements: [],
  isFeesData: false,
};
