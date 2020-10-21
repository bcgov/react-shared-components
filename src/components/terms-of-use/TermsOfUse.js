import React from "react";
import PropTypes from "prop-types";
import { FaPrint } from "react-icons/fa";

import "./TermsOfUse.css";

export const TermsOfUse = ({ acceptTerms, content, heading, confirmText }) => {
  return (
    <div>
      <div className="bcgov-non-printable bcgov-full-width">
        <span
          role="button"
          className="bcgov-print-page print"
          tabIndex={0}
          onClick={() => window.print()}
          onKeyDown={() => window.print()}
        >
          Print
          <FaPrint style={{ marginLeft: "10px" }} />
        </span>

        <h3>{heading}</h3>
      </div>

      <section className="bcgov-scroll-box bcgov-printable">{content}</section>

      <section className="bcgov-non-printable pt-2">
        <label htmlFor="acceptTerms">
          <input id="acceptTerms" type="checkbox" onClick={acceptTerms} />
          &nbsp;
          <b>{confirmText}</b>
          <span id="asterisk" className="bcgov-mandatory">
            *
          </span>
        </label>
      </section>
    </div>
  );
};

TermsOfUse.propTypes = {
  acceptTerms: PropTypes.func.isRequired,
  content: PropTypes.element.isRequired,
  heading: PropTypes.string.isRequired,
  confirmText: PropTypes.string.isRequired,
};
