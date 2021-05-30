import "./App.css";
import React from "react";
import { useState } from "react";
import SidePanel from "./components/SidePanel";
import MainPanel from "./components/MainPanel";
import TodoList from "./components/TodoList";

const PlaceHolder_InputComponent = (
  <div
    style={{
      display: "grid",
      height: "50px",
      width: "100%",
      backgroundColor: "red",
      placeContent: "center",
      color: "white",
      zIndex: "100",
    }}
  >
    PUT INPUT COMPONENT HERE
  </div>
);

function App() {
  //const [activeGroup, setActiveGroup] = useState([]);
  //const [, setActiveGroup] = useState([]);
  const taskNames = ["ECE 2300L", "ECE 2101L", "CS 1400", "COM 1100"];

  return (
    <div id="app-container">
      <h5 className="app-name">Microsoft To Do</h5>
      <SidePanel>
        <TodoList tasks={taskNames} />
        {PlaceHolder_InputComponent}
      </SidePanel>
      <MainPanel />
    </div>
  );
}

export default App;
