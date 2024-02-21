"use client"

import { Suspense, lazy } from "react"
import { portsImportTableConfig } from "@/constants"

import RecordRenderer from "../shared/record-renderer"

const UsaShipment = () => {
  const PieChart = lazy(() => import("./usa-shipment-chart"))

  function getPieChart() {
    return <PieChart />
  }

  const pieChart = getPieChart()

  return (
    <div id="import-ports" className="flex flex-col items-center  py-11">
      <div className="flex w-3/4 flex-col gap-2 p-0 md:p-10">
        <div className="w-full text-center text-3xl font-semibold text-raisin-black">
          {"Indian Import Ports Where Shipments Arrived From United States"}
        </div>
        <div className="text-center text-base font-normal text-dim-gray">
          {
            "India’s top ports at which import shipments arrived from United States between June 2019 and May 2020 are NhavaSheva (45%), Delhi Air (17%), Kandla (7%) and Chennai Air (2%). Below given chart and table shows import value in percentage and dollar amount of shipments which were arrived at Indian ports from United States between June 2019 and May 2020."
          }
        </div>
      </div>
      <div className="flex w-full gap-5 px-11 pb-11">
        <div className="w-full md:w-2/5">
          <RecordRenderer
            columns={portsImportTableConfig.columns}
            rows={portsImportTableConfig.rows}
            pagination={false}
          />
        </div>
        <div className="relative hidden w-2/3 cursor-pointer items-center justify-center p-2 md:block">
          <Suspense fallback={<div>Loading...</div>}>{pieChart}</Suspense>
        </div>
      </div>
    </div>
  )
}

export default UsaShipment
