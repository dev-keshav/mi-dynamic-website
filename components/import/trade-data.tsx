"use client"

import { useState } from "react"
import Image from "next/image"

import ImageZoom from "../ui/image-zoom"

const TradeData = () => {
  const [zoom, setZoom] = useState(false)

  return (
    <div className="flex flex-col bg-light-grey">
      <div className="m-9 flex">
        <div className="hidden w-1/2 flex-col p-4 sm:hidden md:hidden lg:block">
          <div className="mb-6 text-5xl font-medium text-custom-orange">
            India Trade Data
          </div>
          <div className="mb-12 text-base text-custom-grey">
            India Trade data contains Indian Importer Name, Supplier Details,
            Quantity, Import Price, Commodity description and other detailed
            data of shipment. Here is the example for your review.
          </div>
          <button className="btn-styles min-h-[50px]  w-1/2 px-5 py-2 text-[16px] font-semibold text-white shadow-btn-shadow hover:shadow-btn-hover focus:outline-none">
            DOWNLOAD SAMPLE
          </button>
        </div>
        <div className="flex w-full justify-center">
          <ImageZoom
            zoom={zoom}
            setZoom={setZoom}
            src="/india-import-data-sample.png"
            des="india import data"
          />
          <Image
            onClick={() => setZoom(true)}
            className="cursor-zoom-in  rounded hover:opacity-70"
            src="/india-import-data-sample.png"
            alt="import-data"
            width={680}
            height={415}
            unoptimized={true}
          />
        </div>
      </div>
      <div className="mx-20 mb-9 flex flex-col gap-6  sm:flex-row">
        <div className="w-full text-center text-xl font-semibold sm:w-1/2">
          Are you interested in India import data?
        </div>
        <div className="flex w-full items-center justify-center sm:w-1/2">
          <button className="btn-styles min-h-[50px] w-[60%] rounded-sm hover:shadow-btn-hover focus:outline-none">
            Schedule A Demo
          </button>
        </div>
      </div>
    </div>
  )
}

export default TradeData
