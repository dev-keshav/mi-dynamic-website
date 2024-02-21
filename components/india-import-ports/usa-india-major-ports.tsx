"use client"

import { Suspense, lazy } from "react"
import { portsImportTableConfig } from "@/constants"

import RecordRenderer from "../shared/record-renderer"

const UsaIndiaMajorPorts = () => {
  const PieChart = lazy(() => import("./usa-india-major-ports-chart"))

  function getPieChart() {
    return <PieChart />
  }

  const pieChart = getPieChart()

  return (
    <div id="import-ports" className="flex flex-col items-center py-11">
      <div className="flex w-3/4 flex-col gap-2 p-0 md:p-10">
        <div className="w-full text-center text-3xl  text-raisin-black">
          {"Major Ports in India Import from United States"}
        </div>
        <div className="text-center text-base font-normal text-dim-gray">
          {
            "India’s top ports at which goods were arrived from United States were Kandla Sea (34%), Chennai Air (26%), Delhi Air (12%) and Mundra Sea (3%) from June 2019 and May 2020. Understand value in percentage and dollar amount of Indian ports at which import shipments arrived from United States from graphics given below."
          }
        </div>
      </div>
      <div className="flex w-full flex-row-reverse gap-5 px-11 pb-11">
        <div className="w-full md:w-2/5">
          <RecordRenderer
            columns={portsImportTableConfig.columns}
            rows={portsImportTableConfig.rows}
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

export default UsaIndiaMajorPorts
