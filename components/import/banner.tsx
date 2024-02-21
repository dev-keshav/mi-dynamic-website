"use client"

import { Suspense, lazy } from "react"
import Image from "next/image"
import { countries } from "@/constants"

import SelectBox from "../form/select-box"

export const importExport = [
  {
    value: "import",
    label: "Import",
  },
  {
    value: "export",
    label: "Export",
  },
]

const countryValues = countries.map((type) => ({
  value: type.toLowerCase(),
  label: type,
  icon: type === "India" && "/india-flag.png",
}))

const Banner = () => {
  const LineChart = lazy(() => import("./banner-line-chart"))
  function getLineChart() {
    return <LineChart />
  }
  const bannerLineChart = getLineChart()

  return (
    <div
      id="import-banner"
      className="flex h-fit w-full flex-col items-center bg-[url('/mexico-export-data-image.jpg')] bg-cover  bg-no-repeat p-12 "
    >
      <div className="mb-4 flex w-full flex-col items-center gap-2 md:flex-row md:justify-end md:gap-10">
        <SelectBox
          placeholder="Country"
          className="h-full w-[225px] rounded-none border-0 border-b-2 border-white bg-transparent text-white focus:border-0"
          options={countryValues}
          defaultValue="india"
          isSearchable
        />

        <SelectBox
          className="h-full w-[225px] rounded border-white bg-transparent text-white ring-1 ring-white focus:ring-0"
          options={importExport}
          defaultValue="import"
        />
      </div>

      <div className="flex h-fit w-full flex-col items-center sm:flex-col  md:flex-col lg:flex-row">
        <div className="w-full sm:w-full md:w-full lg:w-1/4">
          <Image
            src="/india-map-marketinside.png"
            height={310}
            width={290}
            alt="india-img"
            unoptimized={true}
          />
        </div>
        <div className="mt-6 flex w-full flex-col gap-4 p-0 text-white  sm:mt-6 sm:w-full sm:p-0  md:mt-6 md:w-full md:p-0 lg:w-3/4 lg:justify-center lg:pl-[2.5rem]">
          <div className="text-5xl ">India Import Data</div>
          <div className="text-base	">
            Access online India import data with Indian importer names, their
            shipment details, contact information and other useful trade data.
          </div>
          <div className="hidden sm:hidden md:hidden lg:block">
            <Suspense fallback={<div>Loading...</div>}>
              {bannerLineChart}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
