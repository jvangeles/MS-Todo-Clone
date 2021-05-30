import React from "react";
import Divider from "./Divider";
import FolderIcon from "./FolderIcon";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks }) => {
  return (
    <div className="taskList">
      <TodoItem icon={<FolderIcon />} focusIndex={1} />
      <Divider />

      {tasks.map((taskName) => (
        <TodoItem label={taskName} />
      ))}
      {/* TEST CODE BELOW - TO REPLACE */}
      {Array(20) /* Number of Test Items*/
        .fill(1)
        .map((el, idx) => (
          <TodoItem label={`Sample Task ${idx}`} focusIndex={idx + 2} />
        ))}
    </div>
  );
};

export default TodoList;
