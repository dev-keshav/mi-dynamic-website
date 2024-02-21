"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import Breadcrumbs from "@/components/shared/breadcrumbs"

import SelectBox from "../form/select-box"

const statsConfig = [
  { title: "Total Import Value", des: "US$ 101 Million" },
  { title: "Port Import Share", des: "US$ 12.57 %" },
  { title: "Total Shipment Arrived", des: "3665546" },
  { title: "No. of Indian Importers", des: "55136" },
  { title: "No. of US Suppliers", des: "55136" },
]

const siteMap = [
  { item: "India Imports", id: "india-import" },
  { item: "Import Partners", id: "import-partners" },
  { item: "Importers & Foreign Suppliers", id: "import-suppliers" },
  { item: "Shipment Records", id: "shipment-record" },
  { item: "FAQs", id: "faqs" },
]

export const StatRenderer = ({
  title,
  des,
  classTitle,
  classDes,
  classWrapper,
}: Readonly<{
  title: string
  des: string
  classWrapper?: string
  classTitle?: string
  classDes?: string
}>) => {
  return (
    <div
      className={`flex flex-col gap-3 text-charleston-green ${classWrapper}}`}
    >
      <div className={`text-base font-medium ${classTitle}`}>{title}</div>
      <div className={`text-2xl font-semibold ${classDes}`}>{des} </div>
    </div>
  )
}

const importExport = [
  {
    value: "import",
    label: "Import",
  },
  {
    value: "export",
    label: "Export",
  },
]

const agraImportExport = [
  {
    value: "agra-port-imports",
    label: "Agra ICD Port Imports",
  },

  {
    value: "goa-air",
    label: "Goa Air",
  },
  {
    value: "kolkata-air",
    label: "Kolkata Air",
  },
  {
    value: "jaipur-icd",
    label: "Jaipur ICD",
  },
  {
    value: "panipat-icd",
    label: "Panipat ICD",
  },
]

const breadcrumbItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Data",
    href: "/data",
  },
  {
    title: "India Import Data",
    href: "/data/india-import-data",
  },
  {
    title: "Agra ICD Port Import",
    href: "/india-import-agra-icd-port",
    current: true,
  },
]

const AgraImportData = () => {
  const stickyRelocate = () => {
    const windowTop = window.scrollY
    const anchorElement = document.getElementById("sticky-anchor")
    const divTop = anchorElement?.offsetTop ?? 0

    const stickyElement = document.getElementById("sticky")

    if (windowTop > divTop) {
      stickyElement?.classList.add("stick")
    } else {
      stickyElement?.classList.remove("stick")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", stickyRelocate)
    stickyRelocate()
    return () => {
      window.removeEventListener("scroll", stickyRelocate)
    }
  }, [])

  return (
    <>
      <div className="px-5 pb-[20px] pt-[35px]">
        <div className="pl-5">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <div className="container" >
        <div className="mb-5 mt-[40px] text-3xl  text-raisin-black" style={{fontFamily: 'Roboto, sans-serif', fontSize: '33px',fontWeight: '500'}}>
          Agra ICD Port Imports
        </div>
        <div className="my-[12px] text-base font-semibold text-dim-gray">
          {"Agra ICD Port    (June 2019 to May 2020)"}
        </div>
        <div className="my-5 flex flex-col gap-5 md:flex-row md:gap-24">
          <div className="flex h-full w-[210px] gap-3 rounded-none border-black bg-transparent px-3 py-2 text-base  text-black ring-1 ring-black focus:ring-0">
            <Image src="/india.png" alt="india" height={22} width={22} unoptimized={true}/>
            <div>India</div>
          </div>
          <SelectBox
            placeholder="Agra IDC Port"
            className="h-full w-fit rounded-none border-black bg-transparent text-base  text-black  ring-black focus:ring-0"
            options={agraImportExport}
            defaultValue="agra-port-imports"
            isSearchable
          />
          <SelectBox
            placeholder="Import"
            className="h-full w-[210px] rounded-none border-black bg-transparent text-base  text-black  ring-black focus:ring-0"
            options={importExport}
            defaultValue="import"
          />
        </div>
        <div className="mb-2 flex flex-wrap gap-[10px] py-[15px] md:mr-[200px] md:flex-row md:justify-between md:gap-5">
          {statsConfig.map(({ title, des }) => {
            return <StatRenderer key={title} title={title} des={des} />
          })}
        </div>
        <div className="mt-5 flex w-full flex-wrap gap-5">
          {siteMap.map(({ item, id }, idx) => (
            <Link
              className={cn(
                "flex gap-4 text-[15px] font-semibold text-princeton-orange hover:text-davy-grey"
              )}
              key={id}
              href={`#${id}`}
            >
              {item}
              {siteMap.length - 1 > idx && (
                <div key={item} className="text-black">
                  |
                </div>
              )}
            </Link>
          ))}
          </div>
        </div>
      </div>
      <div id="sticky-anchor"></div>
      <div
        id="sticky"
        className="hidden min-h-[160px] w-full px-5 shadow-fixed-card"
      >
        <div className="relative mb-[10px] mt-[-5px] flex w-full items-center justify-between text-[28px] font-bold text-princeton-orange">
          <div>Agra ICD Port Imports</div>
          <button className="btn-styles mr-[30px] mt-[15px] h-[45px] w-fit px-4 py-2 font-semibold text-white shadow-md focus:outline-none">
            Schedule a Demo
          </button>
        </div>
        <div className="mb-2 flex flex-col gap-[10px] md:mr-[200px] md:flex-row md:gap-8">
          {statsConfig.map(({ title, des }) => {
            return (
              <StatRenderer
                key={title}
                title={title}
                des={des}
                classTitle="text-sm"
                classDes="mt-[-10px] text-lg"
                classWrapper="!gap-0"
              />
            )
          })}
        </div>
        <div className="mb-[10px] flex w-full flex-wrap gap-5">
          {siteMap.map(({ item, id }, idx) => (
            <Link
              className={cn(
                "flex gap-4 text-[16px] font-bold text-princeton-orange hover:text-davy-grey"
              )}
              key={id}
              href={`#${id}`}
            >
              {item}
              {siteMap.length - 1 > idx && (
                <div key={item} className="text-black">
                  |
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default AgraImportData
