import { importGraphData, importGraphLineOptions } from "@/constants"
import { ChartData, ChartOptions } from "chart.js"
import { Line } from "react-chartjs-2"

const LineChart = () => {
  return (
    <Line
      data={importGraphData as ChartData}
      options={importGraphLineOptions as ChartOptions}
    />
  )
}

export default LineChart
