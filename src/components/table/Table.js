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
    verticalMiddle,
    isClose
  },
  isFeesData
}) => {
  let columnWidth = "";
  if (verticalMiddle) {
    columnWidth = "vertical-middle";
  } else if (isSideBySide) {
    columnWidth = "side-by-side";
  }
  const emptyRow = isEmptyRow ? "empty-row" : "";
  const rightAlign = isFeesData ? "right-align" : "";
  const reduceWidth = isClose ? "reduce-width" : "";

  return (
    <tr colSpan="2" className={emptyRow}>
      {isNameBold && (
        <td className={`${columnWidth}${reduceWidth}`}>
          <b>{name}</b>
        </td>
      )}
      {!isNameBold && (
        <td className={`${columnWidth}${reduceWidth}`}>{name}</td>
      )}
      {isValueBold && (
        <td className={rightAlign}>
          <b>{value}</b>
        </td>
      )}
      {!isValueBold && <td>{value}</td>}
    </tr>
  );
};

export const Table = ({ heading, elements, styling, isFeesData }) => {
  const tableComponents = elements.map(element => {
    return (
      <TableElement
        isFeesData={isFeesData}
        key={element.key || element.name}
        element={element}
      />
    );
  });

  return (
    <table className={styling}>
      <thead>
        <tr>
          <th colSpan="2">{heading}</th>
        </tr>
      </thead>
      <tbody>{tableComponents}</tbody>
    </table>
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
    isClose: PropTypes.bool
  }).isRequired,
  isFeesData: PropTypes.bool.isRequired
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
      isEmptyRow: PropTypes.bool
    }).isRequired
  ),
  styling: PropTypes.string,
  isFeesData: PropTypes.bool
};

Table.defaultProps = {
  styling: "",
  heading: "",
  elements: [],
  isFeesData: false
};
