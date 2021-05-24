import React from "react";
import FolderIcon from "./FolderIcon";
import SidePanelItem from "./SidePanelItem";

const SidePanel = () => {
  const taskNames = ["ECE 2300L", "ECE 2101L", "CS 1400", "COM 1100"];
  return (
    <div className="sidepanel--container">
      <div className="sidepanel">
        {taskNames.map((taskName) => (
          <SidePanelItem label={taskName} />
        ))}
        {/* TEST CODE BELOW - TO REPLACE */}
        {Array(20) /* Number of Test Items*/
          .fill(1)
          .map((el, idx) => (
            <SidePanelItem label={`Sample Task ${idx}`} />
          ))}
        <SidePanelItem icon={<FolderIcon />} />
      </div>
      <div
        style={{
          display: "grid",
          height: "50px",
          width: "100%",
          backgroundColor: "red",
          placeContent: "center",
        }}
      >
        PUT INPUT COMPONENT HERE
      </div>
    </div>
  );
};

export default SidePanel;
