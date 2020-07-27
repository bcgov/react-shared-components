import React from "react";
import PropTypes from "prop-types";

import "./Table.css";

const TableElement = ({
  element: { name, value, isValueBold, isNameBold, isEmptyRow },
  isFeesData,
  elementStyles,
}) => {
  const emptyRow = isEmptyRow ? "bcgov-empty-row" : "";
  const rightAlign = isFeesData ? "bcgov-right-align" : "";
  let rowStyle = isFeesData ? "bcgov-row-fees" : "bcgov-row";
  let columnStyle = "bcgov-fill-width";
  if (elementStyles) {
    if (elementStyles.rowStyle) rowStyle += ` ${elementStyles.rowStyle}`;
    if (elementStyles.columnStyle)
      columnStyle = elementStyles && elementStyles.columnStyle;
  }

  return (
    <div className={`${rowStyle} ${emptyRow}`}>
      {isNameBold && (
        <div className={columnStyle}>
          <b>{name}</b>
        </div>
      )}
      {!isNameBold && <div className={columnStyle}>{name}</div>}
      {isValueBold && (
        <div className={`bcgov-table-value ${rightAlign}`}>
          <b>{value}</b>
        </div>
      )}
      {!isValueBold && (
        <div className={`bcgov-table-value ${rightAlign}`}>{value}</div>
      )}
    </div>
  );
};

export const Table = ({
  heading,
  elements,
  styling,
  isFeesData,
  elementStyles,
}) => {
  const tableComponents = elements.map((element) => {
    return (
      <TableElement
        isFeesData={isFeesData}
        key={element.key || element.name}
        element={element}
        elementStyles={elementStyles}
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
    isEmptyRow: PropTypes.bool,
  }).isRequired,
  isFeesData: PropTypes.bool.isRequired,
  elementStyles: PropTypes.object,
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
      isEmptyRow: PropTypes.bool,
    }).isRequired
  ),
  styling: PropTypes.string,
  isFeesData: PropTypes.bool,
  elementStyles: PropTypes.object,
};

Table.defaultProps = {
  styling: "",
  heading: "",
  elements: [],
  isFeesData: false,
  elementStyles: {},
};
