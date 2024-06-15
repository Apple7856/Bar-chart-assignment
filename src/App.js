import React from "react";
import BarChart from "./BarChart";
import "./App.scss";

const App = () => {
  const data = [
    { name: 1, value: 33 },
    { name: 2, value: 45 },
    { name: 3, value: 8 },
    { name: 4, value: 60 },
    { name: 5, value: 50 },
    { name: 6, value: 75 },
  ];
  const maxValue = 100;

  const yAxisData = [10, 20, 30, 40, 50];

  return (
    <div className="container">
      <div className="main-container">
        <h1 className="heading">Bar Chart</h1>
        <BarChart
          data={data}
          maxValue={maxValue}
          yAxisData={yAxisData}
          yAxisName={"No. of ratings"}
          xAxisName={"Rating"}
        />
      </div>
    </div>
  );
};

export default App;
