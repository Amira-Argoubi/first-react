import React from "react";
import "./App.css";
import Para from "./paragraph/para";
import Link from "./link/link";
import List from "./list/list";
function App() {
  return (
    <div className="app">
      <Para />
      <Link />
      <List />
    </div>
  );
}

export default App;
