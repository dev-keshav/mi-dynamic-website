"use client"

import { useState } from "react"
import { importStaticsChartConfig } from "@/constants/tree-map-data"
import { AgChartOptions } from "ag-charts-community"
import { AgChartsReact } from "ag-charts-react"

const PieChart = () => {
  const [options, setOptions] = useState({
    title: {
      text: "Value USD Million(%)",
      color: "#fff",
    },
    data: importStaticsChartConfig,

    series: [
      {
        type: "pie",
        calloutLabelKey: "chapter",
        angleKey: "share",
        calloutLabel: {
          formatter: ({ datum, calloutLabelKey, angleKey }: any) => {
            return `${datum[calloutLabelKey]}- ${datum[angleKey]}%`
          },
        },
      },
    ],
  } as AgChartOptions)

  return <AgChartsReact options={options as AgChartOptions} />
}

export default PieChart
