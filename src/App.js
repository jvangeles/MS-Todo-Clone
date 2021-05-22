import "./App.css";
import React from "react";
import { useState } from "react";
import SidePanel from "./components/SidePanel";
import MainPanel from "./components/MainPanel";

function App() {
  //const [activeGroup, setActiveGroup] = useState([]);
  //const [, setActiveGroup] = useState([]);

  return (
    <div id="app-container">
      <h5 className="app-name">Microsoft To Do</h5>
      <SidePanel />
      <MainPanel />
    </div>
  );
}

export default App;
