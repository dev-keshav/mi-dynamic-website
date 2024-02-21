"use client"

import { importTableConfig } from "@/constants"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import RecordRenderer from "../shared/record-renderer"

const ImporterTab = () => {
  return (
    <div className="m-9 flex flex-col justify-between gap-0 md:flex-row md:gap-20">
      <div className="flex w-full flex-col p-4 md:w-1/3">
        <div className="mb-6 text-2xl font-semibold leading-7 text-dark-gunmetal">
          Indian Importers Who Import from United States
        </div>
        <div className="mb-2 text-base font-medium leading-6	 text-dim-gray md:mb-12">
          Which importers in India import goods from United States? Here is a
          list of top Indian buyers who imported commodities from United States
          with percentage share & dollar amount recorded between June 2019 and
          May 2020.
        </div>
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
        <div className="mb-6 text-2xl font-semibold leading-7 text-dark-gunmetal">
          United States Exporters Who Export to India
        </div>
        <div className="mb-2 text-base text-dim-gray md:mb-12">
          Know from which United States exporters India imported goods between
          June 2019 and May 2020. Check value in percentage and dollar amount
          recorded in this period.
        </div>
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

const ImportersSuppliers = () => {
  return (
    <>
      <div
        id="import-foreign-suppliers"
        className="mb-9 p-8 text-center text-3xl font-semibold"
      >
        Indian Importers and Foreign Suppliers of Live Animals
      </div>
      <Tabs defaultValue="importers" className="w-full">
        <TabsList className="h-auto w-full">
          <TabsTrigger value="importers" className="py-2 text-base font-bold">
            Indian Importers
          </TabsTrigger>
          <TabsTrigger value="foreign-suppliers" className="py-2 font-bold">
            United States Exporters
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

export default ImportersSuppliers
