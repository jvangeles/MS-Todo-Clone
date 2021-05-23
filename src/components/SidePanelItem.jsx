import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from "./Hamburger";

const SidePanelItem = ({ icon, label }) => {
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  return (
    <div className="sidepanel--item">
      {icon}
      <div className="sidepanel--itemLabel">
        <span>{label}</span>
      </div>
    </div>
  );
};

// SidePanelItem.propTypes = {
//   icon: PropTypes.element,
//   label: PropTypes.string,
// };

SidePanelItem.defaultProps = {
  icon: <Hamburger />,
  label: "Placeholder Textasdasdasdasasasasdsdads potato potato man",
};

export default SidePanelItem;
