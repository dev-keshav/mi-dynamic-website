"use client"

import { useState } from "react"
import { animalStaticsConfig } from "@/constants"
import { AgChartOptions } from "ag-charts-community"
import { AgChartsReact } from "ag-charts-react"

const AgraStaticsChart = () => {
  const [options, setOptions] = useState(animalStaticsConfig)

  return <AgChartsReact options={options as unknown as AgChartOptions} />
}

export default AgraStaticsChart
