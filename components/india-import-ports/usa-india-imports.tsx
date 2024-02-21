"use client"

import { Suspense, lazy } from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import UsaIndiaImportRecords from "./usa-india-imports-records"

const Chapter = () => {
  const Chart = lazy(() => import("./usa-india-imports-chart"))

  function getChart() {
    return <Chart />
  }

  const usaIndiaImportChart = getChart()

  return (
    <div
      id="import-statistics"
      className="flex w-full gap-5 bg-dark-charcoal p-10"
    >
      <div className="flex w-full flex-col gap-5 mt-4 text-chinese-silver md:w-2/5">
        <div className="text-4xl leading-10 text-white" style={{fontFamily: 'Roboto, sans-serif'}}>
          {"India’s Ports Import from United States"}
        </div>
        <div className="leading-10" style={{fontSize: '15px', textAlign: 'justify', width: '90%',
           lineHeight: '28px',
           fontWeight: '400',
           color: '#ccc'}}>
          India’s shipments of major products chapter-wise arrived at Indian
          ports from United States between June 2019 & May 2020 are given in
          this chart. Get a clear picture of commodities chapter-wise which
          arrived at ports in India from United States from June 2019 to May
          2020.
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="hidden w-3/5 md:block" style={{height:'400px'}}>{usaIndiaImportChart}</div>
      </Suspense>
    </div>
  )
}

const UsaIndiaImports = () => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col items-center justify-center gap-2 py-[50px]">
        <div className="w-3/4 text-center text-3xl  text-raisin-black">
          India’s Ports Import from United States
        </div>
        <div className="w-3/4 text-center text-base text-dim-gray">
          Which Chapter-wise commodities arrived at Indian ports from United
          States between June 2019 and May 2020? Analyze chapter-wise statistics
          of products which arrived at Indian ports from United States in June
          2019-May 2020 period.
        </div>
      </div>
      <Tabs defaultValue="chapter" className="w-full">
        <TabsList className="h-auto w-full">
          <TabsTrigger value="chapter" className="py-2 text-base font-semibold">
            India Imports
          </TabsTrigger>
          <TabsTrigger value="table" className="py-2 font-semibold">
            Table
          </TabsTrigger>
        </TabsList>
        <TabsContent value="chapter">
          <Chapter />
        </TabsContent>
        <TabsContent value="table" className="p-2">
          <UsaIndiaImportRecords />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default UsaIndiaImports
