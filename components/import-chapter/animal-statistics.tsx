"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Suspense, lazy } from "react"
import AnimalStatisticsRecords from "./animal-statistics-records"

const Chapter = () => {
  const Chart = lazy(() => import("./animal-statics-chart"))

  function getChart() {
    return <Chart />
  }

  const animalStaticsChart = getChart()

  return (
    <div
      id="import-statistics"
      className="flex w-full gap-5 bg-dark-charcoal p-10"
    >
      <div className="flex w-full flex-col gap-5 text-chinese-silver md:w-2/5">
        <div className="text-4xl  leading-10 text-white" style={{fontFamily: 'Roboto, sans-serif'}}>
          {"Live Animals Import Statistics of India"}
        </div>
        <div className="leading-10" style={{fontSize: '15px', textAlign: 'justify', width: '90%',
           lineHeight: '28px',
           fontWeight: '400',
           color: '#ccc'}}>
          India’s major imports between June 2019 and May 2020 under Chapter 01
          – Live Animals were 0101 (25%), 0102 (15%), 0103 (9%), 0104 (8%) and
          0105 (7%). See India import statistics of Chapter 01 commodities,
          which India imported from June 2019 to May 2020.
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="hidden w-4/5 md:block" style={{height:'400px'}}>{animalStaticsChart}</div>
      </Suspense>
    </div>
  )
}

const AnimalStatistics = () => {
  return (
    <div className="flex flex-col">
      <div className="flex w-full flex-col items-center justify-center gap-2 py-[50px]">
        <div className="w-3/4 text-center text-3xl  text-raisin-black">
          India Import Statistics of Live Animals
        </div>
        <div className="w-3/4 text-center text-base text-dim-gray">
          Which products India imported under Chapter 01 – Live Animals between
          June 2019 & May 2020? Check the list of products at 6-digit level HS
          Code under Chapter 01 – Live Animals with statistics, which India
          imported from June 2019 to May 2020.
        </div>
      </div>
      <Tabs defaultValue="chapter" className="w-full">
        <TabsList className="h-auto w-full">
          <TabsTrigger value="chapter" className="py-2 text-base font-semibold">
            Chapter 01
          </TabsTrigger>
          <TabsTrigger value="table" className="py-2 font-bold">
            Table
          </TabsTrigger>
        </TabsList>
        <TabsContent value="chapter">
          <Chapter />
        </TabsContent>
        <TabsContent value="table" className="p-2">
          <AnimalStatisticsRecords />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default AnimalStatistics
