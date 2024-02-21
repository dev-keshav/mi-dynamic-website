"use client"

import { Suspense, lazy } from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import ImportStaticsRecords from "./import-statics-record"

const Chapter = () => {
  const Chart = lazy(() => import("./import-statics-chart"))

  function getChart() {
    return <Chart />
  }

  const animalStaticsChart = getChart()

  return (
    <div
      id="import-statistics"
      className="flex w-full gap-5 bg-dark-charcoal p-10 md:min-h-[490px]"
    >
      <div className="flex w-full flex-col gap-5 text-chinese-silver md:w-2/5">
        <div className="text-4xl font-semibold leading-10 text-white">
          {"India Imports from United States"}
        </div>
        <div className="leading-10">
          India’s top import commodities from United States from June 2019 to
          May 2020 were Chapter 10 (27%), Chapter 01 (24%), Chapter 87 (11%),
          Chapter 11 (7%) and Chapter 27 (2%). View and analyse list of products
          which India imported from United States between June 2019 and May
          2020.
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="hidden w-3/5 md:block">{animalStaticsChart}</div>
      </Suspense>
    </div>
  )
}

const ImportStatics = () => {
  return (
    <div id="import-statistics" className="flex flex-col">
      <div className="flex w-full flex-col items-center justify-center gap-2 py-[50px]">
        <div className="w-3/4 text-center text-3xl font-semibold text-raisin-black">
          What Does India Imports from United States
        </div>
        <div className="w-3/4 text-center text-base  text-dim-gray">
          Bilateral between India and United States. Which goods India imported
          from United States from June 2019 to May 2020? Visualize list of
          commodities with stats, which India imported from United States
          between June 2019 and May 2020.
        </div>
      </div>
      <Tabs defaultValue="chapter" className="w-full">
        <TabsList className="h-auto w-full">
          <TabsTrigger value="chapter" className="py-2 text-base font-bold">
            India Imports
          </TabsTrigger>
          <TabsTrigger value="table" className="py-2 font-bold">
            Table
          </TabsTrigger>
        </TabsList>
        <TabsContent value="chapter">
          <Chapter />
        </TabsContent>
        <TabsContent value="table" className="p-2">
          <ImportStaticsRecords />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ImportStatics
