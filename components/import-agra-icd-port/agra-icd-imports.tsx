"use client"

import { importTableConfig } from "@/constants"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import RecordRenderer from "../shared/record-renderer"

const ImporterTab = () => {
  return (
    <div className="m-9 flex flex-col-reverse justify-between gap-3 md:flex-row-reverse md:gap-20">
      <div className="flex w-full flex-col p-4 md:w-1/3">
        <div className="mb-6 text-2xl font-semibold leading-7 text-dark-gunmetal">
          Importers of Agra ICD port
        </div>
        <div className="mb-2 text-base font-medium leading-6	 text-dim-gray md:mb-12">
          Here is List of top importers of Agra ICD Port of India with their
          import value recorded in June 2019 to May 2020.
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
          Foreign Suppliers to Agra ICD port
        </div>
        <div className="mb-2 text-base text-dim-gray md:mb-12">
          Major foreign suppliers to Agra ICD Port? Check the list of major
          export companies shipping goods to Agra ICD Port with their value
          which is recorded between June 2019 to May 2020.
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

const AgraImportersSuppliers = () => {
  return (
    <>
      <div
        id="import-foreign-suppliers"
        className="mb-9 p-8 text-center text-3xl "
      >
        Indian Importers and Foreign Suppliers of Agra ICD Port
      </div>
      <Tabs defaultValue="importers" className="w-full">
        <TabsList className="h-auto w-full">
          <TabsTrigger value="importers" className="py-2 text-base font-semibold">
            Importers
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

export default AgraImportersSuppliers
