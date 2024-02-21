"use client"

import { animalStaticsConfig } from "@/constants"
import { AgChartOptions } from "ag-charts-community"
import { AgChartsReact } from "ag-charts-react"
import { useState } from "react"

const AnimalStaticsChart = () => {
  const [options, setOptions] = useState(animalStaticsConfig)

  return <AgChartsReact options={options as unknown as AgChartOptions} />
}

export default AnimalStaticsChart
