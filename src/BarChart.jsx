import React from "react";

const BarChart = ({ data, maxValue, yAxisData, yAxisName, xAxisName }) => {
  return (
    <div className="chart-container">
      <div className="y-axis">
        <div className="text-data">{yAxisName}</div>
        <div className="y-axis-value">
          {yAxisData.reverse().map((elem, index) => (
            <div key={index} className="y-axis-data">
              {elem}
            </div>
          ))}
        </div>
      </div>
      <div className="x-axis">
        <div className="bar-chart">
          {data.map((item, index) => (
            <div key={index} className="bar">
              <div
                className="bar-inner"
                style={{ height: `${(item.value / maxValue) * 100}%` }}
              >
                {/* <span className="bar-label">{item.value}%</span> */}
              </div>
              <div className="bar-name">{item.name}</div>
            </div>
          ))}
        </div>
        <div className="text-data">
          <p className="para">{xAxisName}</p>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
