"use client"

import { useState } from "react"
import { treeMapData } from "@/constants/tree-map-data"
import { AgChartOptions } from "ag-charts-community"
import { AgChartsReact } from "ag-charts-react"

const TreeMap = () => {
  const [options, setOptions] = useState({
    data: treeMapData,
    background: {
      visible: false,
    },
    series: [
      {
        gradient: false,
        type: "treemap",
        labelKey: "name",
        sizeKey: "size",
        colorKey: "color",
        tooltip: {
          renderer: (params: any) => {
            const { sizeKey } = params
            const size = params.datum[sizeKey]
            const year = params.datum["year"]
            const importData = params.datum["import"]
            return {
              content: `
                <div style="display: flex; flex-direction: column; gap: 10px; padding: 10px;">
                <div><b>Year:</b> ${year}</div>
                <div><b>Import:</b> ${importData}</div>
                <div><b>Value:</b> ${size}%</div>
                </div>
              `,
            }
          },
        },
        formatter: (params: any) => ({
          stroke: params.depth < 2 ? "transparent" : "black",
        }),
        labels: {
          value: {
            formatter: (params: any) => `${params.datum.size}%`,
          },
        },
      },
    ],
  })

  return <AgChartsReact options={options as AgChartOptions} />
}

export default TreeMap
