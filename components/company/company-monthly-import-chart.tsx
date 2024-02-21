"use client"

import { useState } from "react"
import { companyMonthlyImportChartConfig } from "@/constants"
import { AgChartOptions } from "ag-charts-community"
import { AgChartsReact } from "ag-charts-react"

const BarChart = () => {
  const [options, setOptions] = useState(companyMonthlyImportChartConfig)

  return <AgChartsReact options={options as unknown as AgChartOptions} />
}

export default BarChart
