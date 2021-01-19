import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import LinePlot from "./component/LinePlot";
// import PiePlot from "./component/PiePlot";
// import BarPlot from "./component/BarPlot";
// import RaderPlot from "./component/RadarPlot";
// import BubblePlot from "./component/BubblePlot";
import MaterialUI from "./component/MaterialUI";

function App() {
  return (
    <div className="App">
      {/* <LinePlot />
      <PiePlot />
      <BarPlot />
      <RaderPlot />
      <BubblePlot /> */}
      <MaterialUI />
    </div>
  );
}

export default App;
