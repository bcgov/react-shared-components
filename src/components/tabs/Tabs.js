import React from "react";
import BootTabs from "react-bootstrap/Tabs";
import BootTab from "react-bootstrap/Tab";
import PropTypes from "prop-types";

export const Tabs = ({ tabs, styling, height }) => {
  return (
    <div className={`bcgov-tabs ${styling}`}>
      <BootTabs
        className="bcgov-tab-title"
        id="uncontrolled-tab-example"
        defaultActiveKey={tabs[0].title}
        transition={false}
      >
        {tabs.map((tab) => (
          <BootTab
            className="bcgov-tab-content"
            eventKey={tab.title}
            key={tab.title}
            title={tab.title}
            disabled={tab.isDisabled}
            style={{ height: `${height}px` }}
          >
            {tab.content}
          </BootTab>
        ))}
      </BootTabs>
    </div>
  );
};

Tabs.propTypes = {
  styling: PropTypes.string,
  height: PropTypes.number.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
        .isRequired,
      isDisabled: PropTypes.bool,
    })
  ).isRequired,
};

Tabs.defaultProps = {
  styling: "",
};
