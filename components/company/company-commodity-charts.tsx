"use client"

import { companyCommodityBarConfig } from "@/constants"
import { AgChartOptions } from "ag-charts-community"
import { AgChartsReact } from "ag-charts-react"
import { useState } from "react"

const BarChart = () => {
  const [options, setOptions] = useState(companyCommodityBarConfig)

  return <AgChartsReact options={options as unknown as AgChartOptions} />
}

export default BarChart
