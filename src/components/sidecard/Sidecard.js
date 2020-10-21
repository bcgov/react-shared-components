/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import PropTypes from "prop-types";
import "./Sidecard.css";

export const Sidecard = ({
  sideCard: { id, heading, content, type, image, imageLink, isWide, icon },
}) => {
  let sideCardCss = "bcgov-dashboard-spacing";
  if (isWide) sideCardCss = "bcgov-wide-dashboard-spacing";

  const sideCardTitleCss =
    heading.length > 30 ? "bcgov-large-title" : "bcgov-side-card-title";

  return (
    <div className={sideCardCss} style={{ position: "relative" }}>
      <div className="col-12 pt-2" style={{ position: "relative" }}>
        <p />
        {type === "grey" && (
          <section
            id={id}
            className="bcgov-submit-container"
            style={{
              backgroundColor: "#F2F2F2",
              color: "#000",
              border: "none",
            }}
          >
            <h2 style={{ color: "#000" }}>{heading}</h2>
            <div className="bcgov-submit-content">
              <span>{content}</span>
            </div>
          </section>
        )}
        {type === "blue" && (
          <section id={id} className="bcgov-submit-container">
            <h2 className="bcgov-heading-style">{heading}</h2>
            <div className="bcgov-submit-content">
              <span>{content}</span>
              {image && imageLink && (
                <a href={imageLink} target="_blank" rel="noopener noreferrer">
                  <img
                    src={image}
                    alt="imagelink"
                    height="65px"
                    width="310px"
                  />
                </a>
              )}
            </div>
          </section>
        )}
        {type === "bluegrey" && (
          <section id={id} className="bcgov-bluegrey-container">
            <div className="bcgov-container-background bcgov-bluegrey-heading">
              {!icon && <h2 className="bcgov-heading-style">{heading}</h2>}
              {icon && (
                <h2 className="bcgov-heading-style">
                  <div className="bcgov-side-card-row">
                    <div className="bcgov-round-icon-wrapper">{icon}</div>
                    <div className={sideCardTitleCss}>{heading}</div>
                  </div>
                </h2>
              )}
            </div>
            <div className="bcgov-bluegrey-content">
              <span className="bcgov-content-style">{content}</span>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

Sidecard.propTypes = {
  sideCard: PropTypes.shape({
    id: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    content: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string,
    imageLink: PropTypes.string,
    isWide: PropTypes.bool,
    icon: PropTypes.element,
  }).isRequired,
};
