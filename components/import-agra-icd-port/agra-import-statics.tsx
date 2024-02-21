"use client"

import { Suspense, lazy } from "react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import AgraStatisticsRecords from "./agra-statistics-records"

const Chapter = () => {
  const Chart = lazy(() => import("./agra-statics-chart"))

  function getChart() {
    return <Chart />
  }

  const agraStaticsChart = getChart()

  return (
    <div className="flex w-full gap-5 bg-dark-charcoal p-10">
      <div className="flex w-full flex-col gap-5 mt-4 text-chinese-silver md:w-2/5">
        <div className="text-4xl  leading-10 text-white" style={{fontFamily: 'Roboto, sans-serif'}}>
          {"India’s Agra ICD Port Imports"}
        </div>
        <div className="leading-10" style={{fontSize: '15px', textAlign: 'justify', width: '90%',
           lineHeight: '28px',
           fontWeight: '400',
           color: '#ccc'}}>
          India import statistics of Agra ICD Port between June 2019 to May 2020
          are given in this chart. Get a clear picture of commodities
          chapter-wise which arrived at Agra ICD Port from June 2019 to May
          2020.
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="hidden w-3/5 md:block" style={{height:'400px'}}>{agraStaticsChart}</div>
      </Suspense>
    </div>
  )
}

const AgraImportStatistics = () => {
  return (
    <div id="india-import" className="flex flex-col">
      <div className="flex w-full flex-col items-center justify-center gap-2 py-[50px]">
        <div className="w-3/4 text-center text-3xl  text-raisin-black">
          Major Import Commodities of Agra ICD Port in India
        </div>
        <div className="w-3/4 text-center text-base text-dim-gray">
          Which commodities arrived at Agra ICD Port of India between June 2019
          and May 2020? Analyse chapter-wise statistics of products which India
          imports through Agra ICD Port form June 2019 to May 2020.
        </div>
      </div>
      <Tabs defaultValue="chapter" className="w-full">
        <TabsList className="h-auto w-full">
          <TabsTrigger value="chapter" className="py-2 text-base font-semibold">
            Agra ICD Port
          </TabsTrigger>
          <TabsTrigger value="table" className="py-2 font-bold">
            Table
          </TabsTrigger>
        </TabsList>
        <TabsContent value="chapter">
          <Chapter />
        </TabsContent>
        <TabsContent value="table" className="p-2">
          <AgraStatisticsRecords />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AgraImportStatistics
