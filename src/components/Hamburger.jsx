import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Hamburger() {
  const containerStyle = {};
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        width: "fit-content",
        marginRight: "1.5em",
      }}
    >
      <FontAwesomeIcon icon={faBars} size="lg" color="#9c39b3" />
    </div>
  );
}

export default Hamburger;
