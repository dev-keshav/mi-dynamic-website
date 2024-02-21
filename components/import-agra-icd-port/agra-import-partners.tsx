"use client"

import { useState } from "react"
import Image from "next/image"

import { Icons } from "../icons"
import RecordRenderer from "../shared/record-renderer"

const partnersTableConfig = {
  columns: ["Country", "Value (%)", "Value (USD million)"],
  rows: [
    {
      country: "India",
      valPercentage: "2.2%",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      country: "China",
      valPercentage: "3.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      country: "Indonesia",
      valPercentage: "5.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      country: "Australia",
      valPercentage: "1.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "text-center",
        valPercentage: "text-center",
      },
    },
    {
      country: "UK",
      valPercentage: "2.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      country: "United States",
      valPercentage: "6.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      country: "India",
      valPercentage: "6.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      country: "Japanese",
      valPercentage: "6.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
    {
      country: "China",
      valPercentage: "6.5%",
      valUsd: "2",
      customStyles: {
        valUsd: "blur-sm text-center",
        valPercentage: "blur-sm text-center",
      },
    },
  ],
}

const AgraImportPartners = () => {
  const [hover, setHover] = useState<boolean>(false)

  return (
    <div id="import-suppliers" className="flex flex-col items-center  py-11">
      <div className="flex w-3/4 flex-col gap-2 p-10">
        <div className="w-full text-center text-3xl  text-raisin-black">
          {"Agra ICD Port Imports by Country"}
        </div>
        <div className="text-center text-base font-normal text-dim-gray">
          {
            "India’s Agra ICD Port Import Partners are U.S (32%), Canada (20%), China (15%), Germany (10%) and Japan (5%). These stats are based on between June 2019 to May 2020."
          }
        </div>
      </div>
      <div className="flex w-full gap-0 px-11 pb-11 md:gap-5">
        <div className="w-full sm:w-full md:w-full lg:w-2/5">
          <RecordRenderer
            columns={partnersTableConfig.columns}
            rows={partnersTableConfig.rows}
            pagination={false}
          />
        </div>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="invisible relative flex w-[0px] cursor-pointer items-center justify-center p-0 md:visible md:w-2/3 md:p-2"
        >
          {hover && (
            // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
            <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center gap-5 rounded bg-black bg-opacity-50 text-white">
              <Icons.lockColored className="h-[32px] w-[32px]" />
              <div className="w-3/4 text-center text-base font-bold text-opacity-100">
                Subscribe today to Market Inside pro and access the latest data
              </div>
              <button className="box-content inline-block  bg-princeton-orange px-4 py-2 text-center text-base font-semibold uppercase tracking-wider text-white transition duration-500 ease-in-out   hover:shadow-white">
                Schedule a Demo
              </button>
            </div>
          )}
          <Image src="/world.svg" alt="world" height={310} width={750} />
        </div>
      </div>
    </div>
  )
}

export default AgraImportPartners
