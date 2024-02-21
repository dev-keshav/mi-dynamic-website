"use client"

import { Suspense, lazy, useMemo } from "react"

import RecordRenderer from "../shared/record-renderer"

const IndiaChapterView = () => {
  const BarChart = lazy(() => import("./chapter-view-chart"))

  function getBarChart() {
    return <BarChart />
  }

  const memoizedGetBarChart = useMemo(() => {
    return getBarChart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const memorizedBarChart = useMemo(() => {
    return memoizedGetBarChart
  }, [memoizedGetBarChart])

  const memorizedChart = useMemo(() => {
    return (
      <div className="relative hidden max-h-[1200px] w-[95%] cursor-pointer items-center justify-center  p-2 sm:hidden md:hidden lg:block">
        <Suspense fallback={<div>Loading...</div>}>
          {memorizedBarChart}
        </Suspense>
      </div>
    )
  }, [memorizedBarChart])

  return (
    <div className="flex flex-col items-center py-11">
      <div className="flex w-3/4 flex-col gap-2 p-10">
        <div className="w-full text-center text-3xl font-semibold text-raisin-black">
          {"Graphical View of Importers by Chapter"}
        </div>
        <div className="text-center text-base font-normal text-dim-gray">
          {
            "Visualize India import statistics of Live Animals recorded from June 2019 to May 2020 and analyze clear picture of Live Animals imports."
          }
        </div>
      </div>
      <div className="hidden w-full justify-center gap-5 pb-11 md:flex">
        {memorizedChart}
      </div>
    </div>
  )
}

export default IndiaChapterView
