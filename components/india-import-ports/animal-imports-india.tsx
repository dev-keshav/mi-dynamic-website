"use client"

import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import Breadcrumbs from "@/components/shared/breadcrumbs"

import SelectBox from "../form/select-box"

const statsConfig = [
  {
    title: "Total Imports Share in India",
    des: "$57",
    subTitle: "RANK 45 OF 137",
  },
  {
    title: "Market Shares in Global Imports",
    des: "$57",
    subTitle: "RANK 45 OF 137",
  },
  {
    title: "Total Imports Share in India",
    des: "$57",
    subTitle: "RANK 45 OF 137",
  },
  {
    title: "Market Shares in Global Imports",
    des: "$57",
    subTitle: "RANK 45 OF 137",
  },
]

const StatRenderer = ({
  title,
  des,
  subTitle,
}: Readonly<{
  title: string
  des: string
  subTitle: string
}>) => {
  return (
    <div className="flex flex-col gap-3 text-charleston-green">
      <div className="text-base font-medium ">{title}</div>
      <div className="text-2xl font-bold">{des} </div>
      <div className="text-sm font-normal ">{subTitle}</div>
    </div>
  )
}

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
    title: "Import Ports",
    href: "/india-import-ports",
    current: true,
  },
]

const AnimalImportIndia = () => {
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
    <div className="px-5 pb-[20px] pt-[35px]">
      <div className="pl-5">
        <Breadcrumbs items={breadcrumbItems} />
      </div>
      <div className="container" >
      <div className="mb-5 mt-[40px] text-3xl font-semibold text-raisin-black">
        Live Animal Imports in India
      </div>
      <div className="my-[12px] text-base font-semibold text-dim-gray">
        {"Live Animal - Chapter 01    (June 2019 to May 2020)"}
      </div>
      <div className="my-5 flex flex-col gap-5 md:flex-row">
        <div className="flex h-full w-[210px] gap-3 rounded-none border-black bg-transparent px-3 py-2 text-base font-semibold text-black ring-1 ring-black focus:ring-0">
          <Image src="/india.png" alt="india" height={22} width={22} unoptimized={true} />
          <div>India</div>
        </div>
      </div>
      <div className="mb-2 flex flex-col gap-[10px] py-[15px] md:mr-[200px] md:flex-row md:justify-between md:gap-5">
        {statsConfig.map(({ title, des, subTitle }) => {
          return (
            <StatRenderer
              key={title}
              title={title}
              des={des}
              subTitle={subTitle}
            />
          )
        })}
      </div>
      </div>
    </div>
    </>
  )
}

export default AnimalImportIndia
