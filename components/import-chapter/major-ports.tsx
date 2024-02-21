"use client"

import { majorImportsConfig } from "@/constants"
import { Suspense, lazy } from "react"
import RecordRenderer from "../shared/record-renderer"

const MajorPorts = () => {
  const PieChart = lazy(() => import("./major-ports-chart"))

  function getPieChart() {
    return <PieChart />
  }

  const pieChart = getPieChart()

  return (
    <div id="import-ports" className="flex flex-col items-center py-11">
      <div className="flex w-3/4 flex-col gap-2 p-0 md:p-10">
        <div className="w-full text-center text-3xl  text-raisin-black">
          {"India's Major Ports Where Live Animal Shipments Arrived"}
        </div>
        <div className="text-center text-base font-normal text-dim-gray">
          {
            "Major import ports of Live Animals in India are JNPT (23%), Delhi Air (14%), Mumbai Air (14%) and Kandla Sea (8%). Below given India import statistics of Live Animals are based on period from June 2019 to May 2020."
          }
        </div>
      </div>
      <div className="flex w-full gap-5 px-11 pb-11">
        <div className="w-full md:w-2/5 ">
          <RecordRenderer
            columns={majorImportsConfig.columns}
            rows={majorImportsConfig.rows}
            pagination={false}
          />
        </div>
        <div className="relative hidden w-2/3  cursor-pointer items-center justify-center p-2 md:block">
          <Suspense fallback={<div>Loading...</div>}>{pieChart}</Suspense>
        </div>
      </div>
    </div>
  )
}

export default MajorPorts
