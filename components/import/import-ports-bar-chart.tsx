"use client"

import { portsBarConfig } from "@/constants"
import { AgChartOptions } from "ag-charts-community"
import { AgChartsReact } from "ag-charts-react"
import { useState } from "react"


const BarChart = () => {
  const [options, setOptions] = useState(portsBarConfig)

  return <AgChartsReact options={options as AgChartOptions} />
}

export default BarChart
