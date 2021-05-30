import React from "react";
import PropTypes from "prop-types";

const FolderIcon = ({ size }) => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        width: "1.25em",
        marginRight: "1.5em",
      }}
    >
      <svg
        width={size}
        height="auto"
        viewBox="0 0 54 54"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="2"
          y="2"
          width="50"
          height="50"
          rx="10"
          stroke="#C4C4C4"
          stroke-width="3"
        />
        <line
          x1="16.5"
          y1="12"
          x2="16.5"
          y2="41"
          stroke="#C4C4C4"
          stroke-width="3"
        />
      </svg>
    </div>
  );
};

FolderIcon.propTypes = {
  size: PropTypes.string,
};

FolderIcon.defaultProps = {
  size: ".95rem",
};

export default FolderIcon;
