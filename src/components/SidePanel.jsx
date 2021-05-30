import React, { useEffect, useState } from "react";

const SidePanel = ({ children }) => {
  const handleRightClick = (event, itemLabel) => {
    event.preventDefault();
    window.alert(itemLabel);
  };

  return (
    <div className="sidepanel--container" onContextMenu={handleRightClick}>
      {children}
    </div>
  );
};

export default SidePanel;
