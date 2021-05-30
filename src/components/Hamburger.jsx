import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Hamburger = ({ size }) => {
  const containerStyle = {};
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        width: "1.25em",
        marginRight: "1.5em",
      }}
    >
      <FontAwesomeIcon icon={faBars} size={size} color="#9c39b3" />
    </div>
  );
};

Hamburger.propTypes = {
  size: PropTypes.string,
};

Hamburger.defaultProps = {
  size: "lg",
};

export default Hamburger;
