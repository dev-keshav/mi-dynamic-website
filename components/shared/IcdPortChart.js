import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const IcdPortChart = () => {
  const options = {
    title: {
      text: "Import Value (USD Million)"
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Apple", y: 10 },
          { label: "Orange", y: 15 },
          { label: "Banana", y: 25 },
          { label: "Mango", y: 30 },
          { label: "Grape", y: 28 }
        ]
      }
    ]
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default IcdPortChart;
