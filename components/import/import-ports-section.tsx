"use client"

import { Suspense, lazy, useMemo, useState } from "react"

import { Icons } from "../icons"
import RecordRenderer from "../shared/record-renderer"

const portsImportTableConfig = {
  columns: ["Indian Import Ports", "Value (%)", "Value (USD million)"],
  rows: [
    {
      location: "Agra ICD Import Data	",
      valPercentage: "2.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Ahemdabad Air Import Data	",
      valPercentage: "6.1%",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Ahemdabad ICD Import Data	",
      valPercentage: "9.2%",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Amritsar ACC Import Data	",
      valPercentage: "3.6%",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      location: "Amritsar ACC Import Data	",
      valPercentage: "9.7%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      location: "Ankaleshwar ICD Import Data",
      valPercentage: "6.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      location: "Ballabgarh ICD Import Data",
      valPercentage: "6.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      location: "Bangalore Air Import Data",
      valPercentage: "6.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      location: "Ankaleshwar ICD Import Data",
      valPercentage: "6.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      location: "Ballabgarh ICD Import Data",
      valPercentage: "6.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      location: "Bangalore Air Import Data",
      valPercentage: "6.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      location: "Ankaleshwar ICD Import Data",
      valPercentage: "6.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      location: "Ballabgarh ICD Import Data",
      valPercentage: "6.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      location: "Bangalore Air Import Data",
      valPercentage: "6.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      location: "Ankaleshwar ICD Import Data",
      valPercentage: "6.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      location: "Ballabgarh ICD Import Data",
      valPercentage: "6.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      location: "Bangalore Air Import Data",
      valPercentage: "6.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
  ],
}

const ImportPorts = () => {
  const [hover, setHover] = useState<boolean>(false)

  const BarChart = lazy(() => import("./import-ports-bar-chart"))

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
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative hidden w-1/2 cursor-pointer items-center justify-center p-2 sm:hidden md:hidden lg:block"
      >
        {hover && (
          // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
          <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center gap-5 rounded bg-black bg-opacity-50 text-white">
            <Icons.lockColored className="h-[32px] w-[32px]" />
            <div className="w-3/4 text-center text-base font-bold text-opacity-100">
              Subscribe today to Market Inside pro and access the latest data
            </div>
            <button className="box-content inline-block  bg-princeton-orange px-4 py-2 text-center text-base font-semibold uppercase tracking-wider text-white transition duration-500 ease-in-out hover:shadow-white">
              Schedule a Demo
            </button>
          </div>
        )}
        <Suspense fallback={<div>Loading...</div>}>
          {memorizedBarChart}
        </Suspense>
      </div>
    )
  }, [hover, memorizedBarChart])

  return (
    <div className="flex flex-col items-center py-11">
      <div className="flex w-3/4 flex-col gap-2 p-10">
        <div className="w-full text-center text-3xl font-semibold text-raisin-black">
          {"Import Ports of India where Shipments Arrived the most"}
        </div>
        <div className="text-center text-base font-normal text-dim-gray">
          {
            "India’s Top Major Ports in Imports are JNPT (35%), Delhi Air (30%), Mumbai Air (25%) and Kandla Sea (10%) between June 2019 to May 2020."
          }
        </div>
      </div>
      <div className="flex w-full gap-5 px-11 pb-11">
        <div className="w-full sm:w-full md:w-full lg:w-1/2">
          <RecordRenderer
            columns={portsImportTableConfig.columns}
            rows={portsImportTableConfig.rows}
            pagination={false}
          />
        </div>
        {memorizedChart}
      </div>
    </div>
  )
}

export default ImportPorts
