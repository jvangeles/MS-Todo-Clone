import React from "react";
import PropTypes from "prop-types";

const SidePanelItem = ({ icon, label }) => {
  return (
    <div className="sidepanel--item">
      <div className="sidepanel--itemLabel">label</div>
    </div>
  );
};

SidePanelItem.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string,
};

export default SidePanelItem;
