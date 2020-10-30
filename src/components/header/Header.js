/* eslint-disable no-alert */
import React from "react";
import PropTypes from "prop-types";
import "./Header.css";

const bcidSymbol = `${process.env.PUBLIC_URL}/images/bcid-symbol-rev.svg`;
const bcidLogoRev = `${process.env.PUBLIC_URL}/images/bcid-logo-rev-en.svg`;

export const HeadingTitle = (classNames) => (
  <div className={classNames} aria-labelledby="title" />
);

export const HeaderImage = (history, classNames, width, src) => (
  <img
    className={classNames}
    src={src}
    width={width}
    height="44"
    alt="B.C. Government Logo"
    onClick={() => history.push("/")}
    onKeyDown={() => history.push("/")}
  />
);

export const Header = ({
  header: { name, history, button, additionalText },
}) => {
  return (
    <header className="bcgov-header">
      <nav
        className="container-fluid navbar navbar-expand-lg navbar-dark"
        aria-label="Header"
      >
        {HeadingTitle("navbar-brand bcgov-pointer")}
        {HeaderImage(
          history,
          "img-fluid d-none d-md-block bcgov-pointer",
          181,
          bcidLogoRev
        )}
        {HeaderImage(
          history,
          "img-fluid d-md-none bcgov-pointer",
          64,
          bcidSymbol
        )}
        {HeadingTitle("bcgov-pointer navbar-brand nav-item nav-link")}
        <div className="bcgov-flex-spacing">
          <div id="title" className="navbar-brand bcgov-vertical-center">
            {name}
          </div>
          <div>
            {additionalText && (
              <div className="navbar-brand">{additionalText}</div>
            )}
            {button && <div className="navbar-brand">{button()}</div>}
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  header: PropTypes.shape({
    name: PropTypes.string.isRequired,
    history: PropTypes.any.isRequired,
    button: PropTypes.shape({
      label: PropTypes.string.isRequired,
      styling: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    }),
    additionalText: PropTypes.string,
  }).isRequired,
};
