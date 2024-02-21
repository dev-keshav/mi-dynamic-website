"use client"

import Image from "next/image"
import Link from "next/link"

import SelectBox from "../form/select-box"
import { importExport } from "../import/banner"
import Pagination from "../shared/pagination"

const listConfig = [
  { label: "ARGENTINA CORDONSED SACIIF X", href: "#" },
  { label: "ACSUR CORPORATION", href: "#" },
  { label: "ARPEX ARGENTINA SRL", href: "#" },
  { label: "ARGOLF SA", href: "#" },
  { label: "ABB SA", href: "#" },
  { label: "ACINDAR INDUSTRY ARGENTINA SA STEEL.", href: "#" },
  { label: "ALUFLEX SA.", href: "#" },
  { label: "Administrating entity SHIPYARD RIO SANTIAGO", href: "#" },
  { label: "ARGENTINA DAIMLERCHRYSLER CORPORATION FINANCIAL I", href: "#" },
  { label: "Arcos Dorados SA", href: "#" },
  { label: "AGRO CROM SRL", href: "#" },
  { label: "ADIDAS ARGENTINA SA.", href: "#" },
]

const IndiaImportersList = () => {
  return (
    <div className="flex w-full flex-col items-center px-4 py-11 md:px-[100px] lg:px-12">
      <div className="flex w-full justify-end pb-[40px]">
        <SelectBox
          className="h-[38px] w-[200px] rounded border-deep-saffron bg-transparent text-deep-saffron ring-1 ring-deep-saffron focus:ring-0"
          options={importExport}
          defaultValue="import"
        />
      </div>
      <div className="w-full text-center text-3xl font-semibold text-raisin-black">
        {"List of Importers in India"}
      </div>
      <Pagination
        className="mx-0 mt-8"
        total={260}
        page={1}
        limit={10}
        onChange={() => {}}
        type="alphabet"
      />
      <div className="flex flex-col flex-wrap justify-center px-4 py-10 md:flex-row md:justify-evenly">
        {listConfig.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="flex w-full items-center gap-2 border-b border-dashed border-blue-500 py-3 text-base font-medium md:w-[43%] "
          >
            <div className="relative min-h-[16px] min-w-[16px]">
              <Image
                src="/checkright.png"
                alt="check"
                layout="fill"
                objectFit="contain"
                unoptimized={true}
              />
            </div>
            {label}
          </Link>
        ))}
      </div>
      <Pagination
        className="mx-0 mt-8"
        total={260}
        page={1}
        limit={10}
        onChange={() => {}}
      />
    </div>
  )
}

export default IndiaImportersList
