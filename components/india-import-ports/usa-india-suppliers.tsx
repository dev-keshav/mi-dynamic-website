"use client"

import { importTableConfig } from "@/constants"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import RecordRenderer from "../shared/record-renderer"

const ImporterTab = () => {
  return (
    <div className="m-9 flex flex-col-reverse justify-between gap-3 md:flex-row md:gap-20">
      <div className="w-full flex-col py-4 md:w-1/3 md:px-4">
        <div className="mb-6 text-2xl font-semibold text-dark-gunmetal">
          Indian Importers
        </div>
        <div className="mb-12 text-base text-dim-gray">
          Here is a list of Indian importers whose shipments were arrived at
          ports in India between June 2019 and May 2020.
        </div>
        <button className="bg-gradient hover:bg-gradient-hover w-1/2 px-4 py-2 font-semibold text-white shadow-md transition-transform duration-1000 ease-in-out focus:outline-none">
          View All Importers
        </button>
      </div>
      <div className="w-full md:w-2/3 ">
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
    <div className="m-9 flex flex-col justify-between gap-3 md:flex-row md:gap-20">
      <div className="w-full flex-col py-4 md:w-1/3 md:px-4">
        <div className="mb-6 text-2xl font-bold text-dark-gunmetal md:mb-3">
          Foreign Suppliers
        </div>
        <div className="mb-12 text-base text-dim-gray">
          Check the list of foreign suppliers whose shipments were arrived the
          most at Indian ports from June 2019 to May 2020.
        </div>
        <button className="bg-gradient hover:bg-gradient-hover w-1/2 px-4 py-2 font-semibold text-white shadow-md transition-transform duration-1000 ease-in-out focus:outline-none">
          View All Importers
        </button>
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

const UsaIndiaSuppliers = () => {
  return (
    <>
      <div className="mb-10 p-8 text-center text-3xl ">
        Port Wise Indian Importers and Foreign Suppliers
      </div>
      <Tabs defaultValue="importers" className="w-full pb-10">
        <TabsList className="h-auto w-full">
          <TabsTrigger value="importers" className="py-2 text-base font-semibold">
            Indian Importers
          </TabsTrigger>
          <TabsTrigger value="foreign-suppliers" className="py-2 font-semibold">
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

export default UsaIndiaSuppliers
