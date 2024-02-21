"use client"

import { useState } from "react"
import { chapterViewConfig } from "@/constants"
import { AgChartOptions } from "ag-charts-community"
import { AgChartsReact } from "ag-charts-react"

const BarChart = () => {
  const [options, setOptions] = useState(chapterViewConfig)

  return <AgChartsReact options={options as unknown as AgChartOptions} />
}

export default BarChart
