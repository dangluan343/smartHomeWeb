/* App.js */
import React from "react";
import CanvasJSReact from "../graphLibrary/canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Graph(props) {
  const secondsFormat = (milisecond) => {
    return Math.round(milisecond / 1000, 1);
  };
  const options = {
    animationEnabled: true,
    theme: "dark2",
    title: {
      text: "Device Using Time Chart",
    },
    axisY: {
      title: "Using Time(second)",
      scaleBreaks: {
        autoCalculate: true,
        type: "wavy",
        lineColor: "white",
      },
    },
    data: [
      {
        type: "column",
        indexLabel: "{y}",
        indexLabelFontColor: "white",
        dataPoints: [
          { label: "light", y: secondsFormat(props.lightTimeUsing) },
          { label: "fan", y: secondsFormat(props.doorTimeUsing) },
        ],
      },
    ],
  };

  return (
    <div>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
}

export default Graph;
