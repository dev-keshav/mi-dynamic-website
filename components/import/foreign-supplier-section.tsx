"use client"

import { importTableConfig } from "@/constants"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import RecordRenderer from "../shared/record-renderer"

const ImporterTab = () => {
  return (
    <div className="m-9 flex flex-row-reverse justify-between gap-20">
      <div className="hidden w-1/3 flex-col p-4 sm:hidden md:hidden lg:block">
        <div className="mb-6 text-2xl font-medium text-dark-gunmetal">
          Indian Importers
        </div>
        <div className="mb-12 text-base text-dim-gray">
          Here is List of Top Importers in India with their import value
          recorded in June 2019 to May 2020. Analyze Indian companies business
          performance with the help of our detailed India Import data.
          Understand each & every import Shipment activity of Indian buyers
          online.
        </div>
        <button className="btn-styles h-[45px] w-1/2 px-4 py-2 font-semibold text-white shadow-md focus:outline-none">
          View All Importers
        </button>
      </div>
      <div className="w-full sm:w-full md:w-full  lg:w-2/3">
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
    <div className="m-9 flex flex-col justify-between gap-3 sm:flex-col sm:gap-3 md:flex-col md:gap-3 lg:flex-row lg:gap-20">
      <div className="flex w-full flex-col p-4 sm:w-full md:w-full lg:w-1/3">
        <div className="mb-3 text-2xl font-medium text-dark-gunmetal sm:mb-3 md:mb-3 lg:mb-6">
          Foreign Suppliers
        </div>
        <div className="mb-12 text-base text-dim-gray">
          Who are the top foreign suppliers to India? Check the list of major
          export companies shipping goods to India with their value which is
          recorded between June 2019 to May 2020.
        </div>
        <button className="btn-styles h-[45px] w-1/2 px-4 py-2 font-semibold text-white shadow-md focus:outline-none">
          View All Importers
        </button>
      </div>
      <div className="w-full sm:w-full md:w-full lg:w-2/3">
        <RecordRenderer
          columns={importTableConfig.columns}
          rows={importTableConfig.rows}
          pagination={false}
        />
      </div>
    </div>
  )
}

const ForeignSupplier = () => {
  return (
    <>
      <div className="mb-10 p-8 text-center text-3xl font-semibold">
        List of Importers in India and Foreign Suppliers
      </div>
      <Tabs defaultValue="importers" className="w-full">
        <TabsList className="h-auto w-full">
          <TabsTrigger value="importers" className="py-2 text-base font-bold">
            Importers
          </TabsTrigger>
          <TabsTrigger value="foreign-suppliers" className="py-2 font-bold">
            Foreign Suppliers
          </TabsTrigger>
        </TabsList>
        <TabsContent value="importers">
          <ImporterTab />
        </TabsContent>
        <TabsContent value="foreign-suppliers" className="p-2">
          <SuppliersTab />
        </TabsContent>
      </Tabs>
    </>
  )
}

export default ForeignSupplier
