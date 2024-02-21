"use client"

import React, { Suspense, lazy } from "react"

const MonthlyTrends = () => {
  const LineChart = lazy(() => import("./monthly-trend-chart"))
  function getLineChart() {
    return <LineChart />
  }
  const trendChart = getLineChart()

  return (
    <div
      id="monthly-trends"
      className="flex w-full flex-col items-center justify-center mt-10 gap-2 py-[30px] md:py-[50px]"
    >
      <div className="w-3/4 text-center text-3xl  text-raisin-black">
        Monthly Trends of Live Animals Imports in India
      </div>
      <div className="w-3/4 text-center text-base text-dim-gray">
        Visualize India import data of Live Animals recorded from June 2019 to
        May 2020 and analyze monthly trends of Live Animals imports in India.
      </div>
      <div className="hidden h-[400px] w-3/4 pt-[30px] md:block">
        <Suspense fallback={<div>Loading...</div>}>{trendChart}</Suspense>
      </div>
    </div>
  )
}

export default MonthlyTrends
