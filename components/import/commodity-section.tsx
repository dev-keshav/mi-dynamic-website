"use client"

import { Suspense, lazy } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CommodityRecordsTable from "./commodity-records"

const Commodities = () => {
  const CommoditiesSection = lazy(() => import("./commodity-tab"))
  function getCommoditiesSection() {
    return <CommoditiesSection />
  }
  const commoditiesSection = getCommoditiesSection()

  return (
    <Tabs defaultValue="commodities" className="w-full">
      <TabsList className="h-auto w-full">
        <TabsTrigger
          value="commodities"
          className="py-2 text-base font-bold"
        >
          Commodities
        </TabsTrigger>
        <TabsTrigger value="table" className="py-2 font-bold">
          Table
        </TabsTrigger>
      </TabsList>
      <TabsContent value="commodities">
        <Suspense fallback={<div>Loading...</div>}>
          {commoditiesSection}
        </Suspense>
      </TabsContent>
      <TabsContent value="table" className="p-2">
        <CommodityRecordsTable />
      </TabsContent>
    </Tabs>
  )
}

export default Commodities
