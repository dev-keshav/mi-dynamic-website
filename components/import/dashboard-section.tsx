"use client"

import { useState } from "react"
import Image from "next/image"

import ImageZoom from "../ui/image-zoom"

const Dashboard = () => {
  const [zoom, setZoom] = useState<boolean>(false)

  return (
    <div className="flex flex-col">
      <div className="m-9 flex">
        <div className="hidden w-1/2 flex-col p-4 sm:hidden md:hidden lg:block">
          <div className="mb-6 text-5xl font-medium text-custom-orange">
            Dashboard In Action
          </div>
          <div className="mb-12 text-base text-custom-grey">
            Visualize supply chain of Indian commodities online and know the
            pulse of Indian import and export industries. Identify business
            opportunities from the help of India Import statistics and expand
            your business with our detailed import data of India.
          </div>
        </div>
        <div>
          <ImageZoom
            zoom={zoom}
            setZoom={setZoom}
            src="/dashboard-data.png"
            des="Visualize Data"
          />
          <Image
            onClick={() => setZoom(true)}
            className="cursor-zoom-in  rounded hover:opacity-70"
            src="/dashboard-data.png"
            alt="import-data"
            width={680}
            height={415}
            unoptimized={true}
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
