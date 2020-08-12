import React from "react";

import "./App.css";

import Siderbar from "./components/Sidebar.js";
import Feed from "./components/Feed.js";
import Widgets from "./components/Widgets.js";
function App() {
  return (
    <div className="App">
      <Siderbar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default App;
