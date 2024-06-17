import React, { useEffect, useState } from "react";
import BarChart from "./BarChart";
import "./App.scss";

const App = () => {
  const [data, setData] = useState([]);
  const maxValue = 100;

  const yAxisData = [10, 20, 30, 40, 50];

  const handleClick = () => {
    const newData = [
      { name: 1, value: Math.trunc(Math.random() * 100) },
      { name: 2, value: Math.trunc(Math.random() * 100) },
      { name: 3, value: Math.trunc(Math.random() * 100) },
      { name: 4, value: Math.trunc(Math.random() * 100) },
      { name: 5, value: Math.trunc(Math.random() * 100) },
    ];
    setData(newData);
  };

  useEffect(() => {
    handleClick();
  }, []);

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
        <div className="regenrate">
          <button onClick={handleClick} className="r-btn">
            Regenrate
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
