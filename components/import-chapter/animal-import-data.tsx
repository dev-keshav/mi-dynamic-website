"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import Breadcrumbs from "@/components/shared/breadcrumbs"

import SelectBox from "../form/select-box"

const statsConfig = [
  { title: "Total Import Value:", des: "US$ 57 Million" },
  { title: "Total Shipment Arrived:", des: "56546" },
  { title: "No. of India Importers:", des: "81696" },
  { title: "No. of Foreign Suppliers:", des: "81696" },
]

const siteMap = [
  { item: "Import Statistics", id: "import-statistics" },
  { item: "Monthly Trends", id: "monthly-trends" },
  { item: "Import Partners", id: "import-partners" },
  { item: "Import Ports", id: "import-ports" },
  { item: "Importers & Foreign Suppliers", id: "import-foreign-suppliers" },
  { item: "Shipment Records", id: "shipment-record" },
  { item: "FAQs", id: "faqs" },
]

const StatRenderer = ({
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
      <div className={`text-2xl font-bold ${classDes}`}>{des} </div>
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
    title: "Chapter 01 Import",
    href: "/india-import-chapter01",
    current: true,
  },
]

const AnimalImportData = () => {
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
    <style jsx>{`
        @media (min-width: 576px) {
          .container {
            max-width: 540px;
          }
          @media (min-width: 768px) {
            .container {
              max-width: 720px;
            }
          }

          @media (min-width: 992px) {
            .container {
              max-width: 960px;
            }
          }

          @media (min-width: 1200px) {
            .container {
              max-width: 1420px;
            }
          }
        }
      `}</style>
      <div className="bg-white px-5 pb-[20px] pt-[35px]">
        <div className="pl-5">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <div className="container" >
        <div className="mb-5 mt-[60px] text-3xl font-bold text-raisin-black">
          Live Animal Imports in India
        </div>
        <div className="my-[30px] text-base  text-dim-gray">
          {"Live Animal - Chapter 01    (June 2019 to May 2020)"}
        </div>
        <div className="my-5 flex flex-col gap-36 md:flex-row">
          <div className="flex h-full w-[210px] gap-3 rounded-none border-black bg-transparent px-3 py-2 text-base font-semibold text-black ring-1 ring-black focus:ring-0">
            <Image src="/india.png" alt="india" height={22} width={22} />
            <div>India</div>
          </div>
          <SelectBox
            placeholder="Import"
            className="h-full w-[210px] rounded-none border-black bg-transparent text-base font-semibold text-black  ring-black focus:ring-0"
            options={importExport}
            defaultValue="import"
          />
        </div>
        <div className="mb-2 flex flex-col gap-[10px] py-[15px] md:mr-[200px] md:flex-row md:justify-between md:gap-5">
          {statsConfig.map(({ title, des }) => {
            return <StatRenderer key={title} title={title} des={des} />
          })}
        </div>
        
        <div className=" mt-8  w-full  gap-5" style={{display: 'flex',justifyContent: 'center'}}>
          {siteMap.map(({ item, id }, idx) => (
            <Link
              className={cn(
                "flex gap-4 text-[16px]  text-princeton-orange hover:text-davy-grey"
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
          <div> Live Animal Imports in India</div>
          <button className="btn-styles mr-[50px] mt-[15px] h-[45px] w-fit px-4 py-2 font-semibold text-white shadow-md focus:outline-none">
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

export default AnimalImportData
