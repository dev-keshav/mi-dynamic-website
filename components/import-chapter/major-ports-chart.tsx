"use client"

import { useState } from "react"
import { pieChartData } from "@/constants/tree-map-data"
import { AgChartOptions } from "ag-charts-community"
import { AgChartsReact } from "ag-charts-react"

const PieChart = () => {
  const [options, setOptions] = useState({
    title: {
      text: "Value USD Million(%)",
    },
    data: pieChartData,
    series: [
      {
        type: "pie",
        calloutLabelKey: "city",
        angleKey: "share",
        innerRadiusOffset: -30,
        calloutLabel: {
          formatter: ({ datum, calloutLabelKey, angleKey }: any) => {
            return `${datum[calloutLabelKey]}-${datum[angleKey]}`
          },
        },
      },
    ],
  })

  return <AgChartsReact options={options as AgChartOptions} />
}

export default PieChart
