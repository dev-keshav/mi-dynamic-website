import { usaMonthlyTrendChartConfig } from "@/constants"
import { AgChartOptions } from "ag-charts-community"
import { AgChartsReact } from "ag-charts-react"
import { useState } from "react"

const MonthlyTrendLineChart = () => {
  const [options, setOptions] = useState(usaMonthlyTrendChartConfig)

  return <AgChartsReact options={options as unknown as AgChartOptions} />
}

export default MonthlyTrendLineChart
