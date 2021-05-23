import React from "react";
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
          .map((el) => (
            <SidePanelItem />
          ))}
      </div>
    </div>
  );
};

export default SidePanel;
