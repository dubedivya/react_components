import React from "react";
import PaginationTest from "./components/01_Pagination/paginationTest.jsx";
import "./App.css";
import DigitalClock from "./components/02_DigitalClock/digitalClock.jsx";

const App = () => {
  return (
    <div className="App">
      <h1 className="heading">React JS Interview Projects : Part 2</h1>
      <PaginationTest />
      <DigitalClock />
    </div>
  );
};

export default App;
