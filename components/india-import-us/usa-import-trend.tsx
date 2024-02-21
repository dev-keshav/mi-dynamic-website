"use client"

import React, { Suspense, lazy } from "react"

const ImportMonthlyTrends = () => {
  const LineChart = lazy(() => import("./usa-import-trend-chart"))
  function getLineChart() {
    return <LineChart />
  }
  const trendChart = getLineChart()

  return (
    <div
      id="monthly-trends"
      className="flex w-full flex-col items-center justify-center gap-2 py-[30px] md:py-[50px]"
    >
      <div className="w-3/4 text-center text-3xl font-semibold text-raisin-black">
        Monthly Trends of India Import from United States
      </div>
      <div className="w-3/4 text-center text-base text-dim-gray">
        How much India imports from United States? Visualize total import value
        of commodities which were imported by India from United States recorded
        between June 2019 and May 2020.
      </div>
      <div className="hidden h-[400px] w-3/4 pt-[30px] md:block">
        <Suspense fallback={<div>Loading...</div>}>{trendChart}</Suspense>
      </div>
    </div>
  )
}

export default ImportMonthlyTrends
