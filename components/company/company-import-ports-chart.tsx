import React, { useState } from "react";
import { companyImportPortsChartData } from "@/constants/tree-map-data";
import { AgChartOptions, AgPieSeriesFormatterParams } from "ag-charts-community";
import { AgChartsReact } from "ag-charts-react";
import { getTitle } from "@/constants/getTitle";

interface PieChartProps {
  selectedTab: number;
}

const PieChart: React.FC<PieChartProps> = ({ selectedTab }) => {
  var chartTitle = getTitle(
    "Import Value (USD %)",
    "Export Value (USD %)",
    selectedTab
  );

  const [options, setOptions] = useState<AgChartOptions>({
    title: {
      text: chartTitle as string, // Explicitly cast to string
    },
    data: companyImportPortsChartData,
    series: [
      {
        type: "pie",
        calloutLabelKey: "city",
        angleKey: "share",
        innerRadiusOffset: -30,
        formatter: (params: AgPieSeriesFormatterParams<any>) => {
          const { datum, highlighted, fill } = params;
          const xKey: string = Object.keys(datum)[0];


          return {
            text: `${xKey}: ${datum[xKey]}`,
            fill: highlighted ? "white" : fill,
          };
        },
      },
    ],
  });

  return <AgChartsReact options={options} />;
};

export default PieChart;
