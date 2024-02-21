"use client"

import { importTableConfig } from "@/constants"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import RecordRenderer from "../shared/record-renderer"

const ImporterTab = () => {

  
  return (
    <div className="m-9 flex flex-col justify-between gap-0 md:flex-row md:gap-20">
      <div className="flex w-full flex-col p-4 md:w-1/3">
        <div className="mb-6 text-2xl font-medium text-dark-gunmetal">
          Live Animals Importers in India
        </div>
        <div className="mb-2 text-base text-dim-gray md:mb-12">
          Here is a List of Top Importers of Live Animals with their import
          values recorded from June 2019 to May 2020. Analyze business
          performance of Live Animals buyers with the help of our Detailed Live
          Animals Import data of India. Understand each & every import shipment
          activity of Live Animals Importers online.
        </div>
        <div className="flex flex-row-reverse">
        <Button
        id="search-btn"
        className="h-10 w-fit rounded-none border-0 text-sm font-bold"
      >
        View All Importers
      </Button></div>
      </div>
      <div className="w-full md:w-2/3">
        <RecordRenderer
          columns={importTableConfig.columns}
          rows={importTableConfig.rows}
          pagination={false}
        />
      </div>
    </div>
  )
}

const SuppliersTab = () => {
  return (
    <div className="m-9 flex flex-col justify-between gap-0 md:flex-row md:gap-20">
      <div className="flex w-full flex-col p-4 md:w-1/3">
        <div className="mb-6 text-2xl font-medium text-dark-gunmetal">
          Foreign Suppliers of Live Animals
        </div>
        <div className="mb-2 text-base text-dim-gray md:mb-12">
          Who are the top foreign suppliers of Live Animals? Check the list of
          major export companies of Live Animals with their values recorded
          between June 2019 and May 2020.
        </div>
        <div className="flex flex-row-reverse">
        <Button
        id="search-btn"
        className="h-10 w-fit rounded-none border-0 text-sm font-bold"
      >
        View All Suppliers
      </Button></div>
      </div>
      <div className="w-full md:w-2/3">
        <RecordRenderer
          columns={importTableConfig.columns}
          rows={importTableConfig.rows}
          pagination={false}
        />
      </div>
    </div>
  )
}

const AnimalForeignSuppliers = () => {
  return (
    <>
      <div
        id="import-foreign-suppliers"
        className="mb-9 p-8 text-center text-3xl "
      >
        Indian Importers and Foreign Suppliers of Live Animals
      </div>
      <Tabs defaultValue="importers" className="w-full">
        <TabsList className="h-auto w-full">
          <TabsTrigger
            value="importers"
            className="py-2 text-base font-bold"
          >
            Indian Importers
          </TabsTrigger>
          <TabsTrigger
            value="foreign-suppliers"
            className="py-2 font-bold"
          >
            Foreign Suppliers
          </TabsTrigger>
        </TabsList>
        <TabsContent value="importers">
          <ImporterTab />
        </TabsContent>
        <TabsContent value="foreign-suppliers">
          <SuppliersTab />
        </TabsContent>
      </Tabs>
    </>
  )
}

export default AnimalForeignSuppliers
